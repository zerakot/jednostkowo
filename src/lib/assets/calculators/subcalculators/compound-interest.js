import Controllers from '$lib/components/calculators/Controllers/Controllers.svelte';
import { formatOutputNumber, round } from '../../../utils';

export default [
	{
		label: 'Obliczanie procentu składanego',
		component: Controllers,
		controllers: [
			{
				id: 'amount',
				defaultValue: '1000',
				element: 'input',
				label: 'Kapitał początkowy',
				attributes: {
					type: 'number'
				}
			},
			{
				id: 'periods',
				defaultValue: '',
				element: 'input',
				label: 'Okres oszczędzania',
				attributes: {
					type: 'number',
					placeholder: 'Podaj okres oszczędzania'
				}
			},
			{
				id: 'periodsType',
				element: 'select',
				label: 'Typ okresu',
				options: [
					{
						label: 'Lata',
						name: '1',
						default: true
					},
					{
						label: 'Miesiące',
						name: '12'
					}
				]
			},
			{
				id: 'interestRate',
				element: 'input',
				defaultValue: '',
				label: 'Oprocentowanie [%]',
				attributes: {
					type: 'number',
					placeholder: 'Podaj oprocentowanie'
				}
			},
			{
				id: 'capitalisation',
				element: 'select',
				label: 'Kapitalizacja odsetek',
				options: [
					{
						label: 'Rocznie',
						name: '1',
						default: true
					},
					{
						label: 'Kwartalnie',
						name: '4'
					},
					{
						label: 'Miesięcznie',
						name: '12'
					}
				]
			},
			{
				advanced: true,
				id: 'regularPaymentAmount',
				defaultValue: '',
				element: 'input',
				label: 'Kwota regularnej wpłaty',
				attributes: {
					type: 'number',
					placeholder: 'Podaj kwotę regularnej wpłaty'
				}
			},
			{
				advanced: true,
				id: 'regularPaymentFrequency',
				element: 'select',
				label: 'Częstotliwość regularnej wpłaty',
				options: [
					{
						label: 'Rocznie',
						name: '1',
						default: true
					},
					{
						label: 'Miesięcznie',
						name: '12'
					},
					{
						label: 'Kwartalnie',
						name: '4'
					}
				]
			}
		],
		buttons: [
			{
				label: 'Oblicz',
				action: (dataset) => {
					let {
						amount,
						periods,
						periodsType,
						interestRate,
						capitalisation,
						regularPaymentAmount,
						regularPaymentFrequency
					} = dataset;

					if (!amount || !periods || !interestRate) {
						return { error: 'Wypełnij wszystkie pola formularza.' };
					}
					if (!regularPaymentAmount) regularPaymentAmount = 0;

					amount = parseFloat(amount);
					periods = parseFloat(periods);
					periodsType = parseFloat(periodsType);
					interestRate = parseFloat(interestRate);
					capitalisation = parseInt(capitalisation);
					regularPaymentAmount = parseFloat(regularPaymentAmount);
					regularPaymentFrequency = parseInt(regularPaymentFrequency);

					interestRate = interestRate / 100;
					var timeYears = periods / periodsType;
					var rYearPer = Math.pow(1 + interestRate / 1, 1 / regularPaymentFrequency) - 1;

					var g = 0;
					var g_p = 0;
					var type = 1; // Kiedy? end lub before
					var var1 = 1;

					var apy = 0.0195; //
					var DepositBal = 0;
					var PrincipalBal = 0;
					var FinalBal = 20000; // 20000

					var MAX_ITERATIONS = 5000;
					var MIN_PRECISION = 0.0000001; //1.0e-8

					var guess = apy;
					var old_r;
					var new_r = guess;
					var iteration_r = 0;
					/* Ustawia tablicę między miesiace a lata */
					var select1 = 1; // 1 miesiące, 2 - lata

					do {
						old_r = new_r;

						var dividend_r2 = Math.pow(1 + new_r / capitalisation, capitalisation) - 1 - apy;

						var divisor_r2 = Math.pow(1 + new_r / capitalisation, capitalisation - 1);

						new_r = new_r - dividend_r2 / divisor_r2;

						++iteration_r;
					} while (Math.abs(old_r - new_r) > MIN_PRECISION && iteration_r <= MAX_ITERATIONS);

					var eq_base;

					/* Usunięto warunek if capitalisation === 0 i zostawiono tylko else */
					eq_base = 1 + interestRate / capitalisation;

					var eq_power = capitalisation / regularPaymentFrequency;
					var eq_p = Math.pow(eq_base, eq_power) - 1;

					var periodsTotal = regularPaymentFrequency * timeYears;
					if (periodsTotal > 24) {
						select1 = 2;
					}
					PrincipalBal = amount * Math.pow(1 + eq_p, periodsTotal);

					if (g !== eq_p && regularPaymentFrequency !== 1) {
						DepositBal =
							(regularPaymentAmount *
								(Math.pow(1 + eq_p, periodsTotal) - Math.pow(1 + g_p, periodsTotal)) *
								(1 + eq_p * type)) /
							(eq_p - g_p);
					} else if (g !== eq_p && regularPaymentFrequency === 1) {
						DepositBal =
							(regularPaymentAmount *
								(Math.pow(1 + eq_p, periodsTotal) - Math.pow(1 + g, periodsTotal)) *
								(1 + eq_p * type)) /
							(eq_p - g);
					} else if (g === eq_p) {
						DepositBal =
							regularPaymentAmount *
							periodsTotal *
							Math.pow(1 + eq_p, periodsTotal - 1) *
							(1 + eq_p * type);
					}

					FinalBal = PrincipalBal + DepositBal;

					PrincipalBal = amount * Math.pow(1 + eq_p, periodsTotal);

					FinalBal = PrincipalBal + DepositBal;

					// monthly balances from here
					var eq_base_monthly;

					eq_base_monthly = 1 + interestRate / capitalisation;

					var eq_power_monthly = capitalisation / 12;
					var k = 12 / regularPaymentFrequency;

					var MonthlyDep = regularPaymentAmount / k;
					var r_monthly = Math.pow(eq_base_monthly, eq_power_monthly) - 1; //monthly interest rate

					var periodsMonth = timeYears * 12;

					var resultTable = [];
					var resultTableKeys = [];

					var i;
					var rowLabelTableMonth; //ok
					var rowLabelTableYear; //ok

					var InitialBal = amount / (r_monthly + 1);
					var InitialBal_lag = 0; //ok

					var DepBal = 0; //ok
					var DepBal_lag; //ok

					var DepBalPrinc = 0; //ok
					var DepBalPrinc_lag = 0; //ok
					var DepBalPrinc_lag2 = 0; //ok

					var YearlyDep; //ok

					var BalanceTotal = 0;
					var BalanceIntTotal = 0;

					var dep_pow; //ok
					var dep_pow_lag; //ok

					/* Jest flagą przy dobieraniu liczby miesięcy/lat do tabeli */
					var pointFractionTable = 0; //ok

					for (i = 0; i <= periodsMonth; i++) {
						rowLabelTableMonth = i; //ok

						dep_pow = (i / 12) * regularPaymentFrequency; //ok
						dep_pow_lag = ((i - 12) / 12) * regularPaymentFrequency; //ok - for yearly balances

						if (i > 12 && i % 12 !== 0) {
							dep_pow_lag = ((i - (i % 12)) / 12) * regularPaymentFrequency;
						} // for fractional yearly deposit and interest
						if (regularPaymentFrequency === 1000) {
							MonthlyDep = 0;
						}
						// initial deposit ***

						InitialBal = amount * Math.pow(1 + eq_p, dep_pow);

						InitialBal_lag = amount * Math.pow(1 + eq_p, dep_pow_lag);

						if (i < 12) {
							InitialBal_lag = amount;
						}

						if (i < 12) {
							DepBal_lag = 0;
							DepBalPrinc_lag = 0;
						}

						if ((var1 > 3 || g === 0) && i > 1) {
							DepBalPrinc_lag2 += MonthlyDep;
						}

						if ((var1 > 3 || g === 0) && i > 0) {
							DepBalPrinc += MonthlyDep;
						}

						if ((var1 > 3 || g === 0) && i > 12) {
							DepBalPrinc_lag += MonthlyDep;
						}

						if (g !== eq_p && regularPaymentFrequency !== 1 && var1 <= 3) {
							DepBal =
								(regularPaymentAmount *
									(Math.pow(1 + eq_p, dep_pow) - Math.pow(1 + g_p, dep_pow)) *
									(1 + eq_p * type)) /
								(eq_p - g_p);

							DepBal_lag =
								(regularPaymentAmount *
									(Math.pow(1 + eq_p, dep_pow_lag) - Math.pow(1 + g_p, dep_pow_lag)) *
									(1 + eq_p * type)) /
								(eq_p - g_p);
						} else if (g !== eq_p && regularPaymentFrequency === 1 && var1 <= 3) {
							DepBal =
								(regularPaymentAmount *
									(Math.pow(1 + eq_p, dep_pow) - Math.pow(1 + g, dep_pow)) *
									(1 + eq_p * type)) /
								(eq_p - g);

							DepBal_lag =
								(regularPaymentAmount *
									(Math.pow(1 + eq_p, dep_pow_lag) - Math.pow(1 + g_p, dep_pow_lag)) *
									(1 + eq_p * type)) /
								(eq_p - g_p);
						} else if (g === eq_p && var1 < 4) {
							DepBal =
								regularPaymentAmount *
								dep_pow *
								Math.pow(1 + eq_p, dep_pow - 1) *
								(1 + eq_p * type);

							DepBal_lag =
								regularPaymentAmount *
								dep_pow_lag *
								Math.pow(1 + eq_p, dep_pow_lag - 1) *
								(1 + eq_p * type);
						}

						YearlyDep = DepBalPrinc - DepBalPrinc_lag; //ok

						if (i > 12 && i % 12 !== 0) {
							YearlyDep = (YearlyDep * (i % 12)) / 12;
						}

						BalanceTotal = InitialBal + DepBal; //ok

						BalanceIntTotal = BalanceTotal - DepBalPrinc - amount; //ok

						if (select1 === 1) {
							resultTableKeys = ['Miesiąc', 'Wkład', 'Skumulowane odsetki', 'Razem'];
							resultTable.push([
								rowLabelTableMonth,
								formatOutputNumber(round(DepBalPrinc + amount, 2)), //ok
								formatOutputNumber(round(BalanceIntTotal, 2)), //ok
								formatOutputNumber(round(BalanceTotal, 2)) //ok
							]);
						}
						if (select1 === 2) {
							// Tylko określone periods co 12 będą dodawane
							if (pointFractionTable < i + 1 || i > periodsMonth - 1) {
								rowLabelTableYear =
									i % 12 === 0 ? i / 12 : '... i ' + (Math.trunc(timeYears * 12) % 12) + ' mies.';

								resultTableKeys = ['Rok', 'Wkład', 'Skumulowane odsetki', 'Razem'];
								resultTable.push([
									rowLabelTableYear, //ok
									formatOutputNumber(round(DepBalPrinc + amount, 2)), //ok
									formatOutputNumber(round(BalanceIntTotal, 2)), //ok
									formatOutputNumber(round(BalanceTotal, 2)) //ok
								]);

								rowLabelTableYear++;
								pointFractionTable += 12;
							}
						}

						if (pointFractionTable < i + 1 || i > periodsMonth - 1) {
							//ok

							rowLabelTableYear =
								i % 12 === 0
									? i / 12
									: '... and ' + (Math.trunc(timeYears * 12) % 12) + ' month(s)';

							rowLabelTableYear++;
							pointFractionTable += 12;
						}
					}

					return {
						description: `Na koniec okresu oszczędzania, stan konta wyniesie
                            <b data-testid="finalAmount">${formatOutputNumber(
															round(FinalBal, 2)
														)} zł</b>. <br/>
                            ${
															parseFloat(regularPaymentAmount) > 0
																? `Suma wszystkich regularnych wpłat będzie równa
                                    <b data-testid="depositsTotal">${formatOutputNumber(
																			round(DepositBal, 2)
																		)} zł</b>.<br/>`
																: ''
														}
                            Całkowity zysk wyniesie <b data-testid="profit">${formatOutputNumber(
															round(FinalBal - (amount + DepositBal), 2)
														)} zł</b>.`,
						table: {
							keys: resultTableKeys,
							values: resultTable
						},
						type: 'table'
					};
				}
			}
		],
		layout: {
			gridTemplate:
				'"amount amount" "periods periodsType" "interestRate capitalisation" "regularPaymentAmount regularPaymentFrequency" "check check" / 1fr 50%'
		}
	}
];
