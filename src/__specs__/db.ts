/* eslint-disable @typescript-eslint/camelcase */
import {
	DetectVersionOperator,
	EQUAL,
	LESS_THEN_OR_EQUAL,
	MORE_THEN_OR_EQUAL
} from '../utils';
import browserizr from '../core';

export const uaDB = {
	Android: {
		v10: {
			Chrome: {
				v85: {
					Standard: [
						'Mozilla/5.0 (Linux; Android 10; HD1910) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.127 Mobile Safari/537.36'
					]
				},
				v87: {
					Standard: [
						'Mozilla/5.0 (Linux; Android 10; HD1910) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.101 Mobile Safari/537.36',
						'Mozilla/5.0 (Linux; Android 10) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.66 Mobile Safari/537.36'
					],
					'Chrome on Samsung': [
						'Mozilla/5.0 (Linux; Android 10; SM-A205U) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.66 Mobile Safari/537.36',
						'Mozilla/5.0 (Linux; Android 10; SM-A102U) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.66 Mobile Safari/537.36',
						'Mozilla/5.0 (Linux; Android 10; SM-G960U) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.66 Mobile Safari/537.36',
						'Mozilla/5.0 (Linux; Android 10; SM-N960U) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.66 Mobile Safari/537.36'
					],
					'Chrome on Lg': [
						'Mozilla/5.0 (Linux; Android 10; LM-Q720) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.66 Mobile Safari/537.36',
						'Mozilla/5.0 (Linux; Android 10; LM-X420) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.66 Mobile Safari/537.36',
						'Mozilla/5.0 (Linux; Android 10; LM-Q710(FGN)) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.66 Mobile Safari/537.36'
					]
				}
			},
			EdgeAndroid: {
				v45: {
					Standard: [
						'Mozilla/5.0 (Linux; Android 10; HD1910) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.116 Mobile Safari/537.36 EdgA/45.11.4.5116',
						'Mozilla/5.0 (Linux; Android 10; HD1913) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.66 Mobile Safari/537.36 EdgA/45.10.4.5088',
						'Mozilla/5.0 (Linux; Android 10; SM-G973F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.66 Mobile Safari/537.36 EdgA/45.10.4.5088',
						'Mozilla/5.0 (Linux; Android 10; Pixel 3 XL) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.66 Mobile Safari/537.36 EdgA/45.10.4.5088',
						'Mozilla/5.0 (Linux; Android 10; ONEPLUS A6003) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.66 Mobile Safari/537.36 EdgA/45.10.4.5088'
					]
				}
			},
			Firefox: {
				v82: {
					Standard: [
						'Mozilla/5.0 (Android 10; Mobile; rv:82.0) Gecko/82.0 Firefox/82.0'
					]
				},
				v84: {
					Standard: [
						'Mozilla/5.0 (Android 10; Mobile; rv:84.0) Gecko/84.0 Firefox/84.0'
					]
				}
			},
			Opera: {
				v59: {
					'Opera on Huawei': [
						'Mozilla/5.0 (Linux; Android 10; VOG-L29) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.66 Mobile Safari/537.36 OPR/59.1.2926.54067'
					],
					'Opera on Sumsung': [
						'Mozilla/5.0 (Linux; Android 10; SM-G970F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.66 Mobile Safari/537.36 OPR/59.1.2926.54067',
						'Mozilla/5.0 (Linux; Android 10; SM-N975F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.66 Mobile Safari/537.36 OPR/59.1.2926.54067'
					]
				},
				v60: {
					Standard: [
						'Mozilla/5.0 (Linux; Android 10; HD1910) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.127 Mobile Safari/537.36 OPR/60.3.3004.55692'
					]
				},
				v61: {
					Standard: [
						'Mozilla/5.0 (Linux; Android 10; HD1910) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Mobile Safari/537.36 OPR/61.1.3076.56625'
					]
				}
			}
		},
		v11: {
			Firefox: {
				v83: {
					Standard: [
						'Mozilla/5.0 (Android 11; Mobile; rv:68.0) Gecko/68.0 Firefox/83.0'
					],
					'Firefox on Lg': [
						'Mozilla/5.0 (Android 11; Mobile; LG-M255; rv:83.0) Gecko/83.0 Firefox/83.0'
					]
				}
			},
			Yandex: {
				v20: {
					Standard: [
						'Mozilla/5.0 (Linux; arm_64; Android 11; SM-G965F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.66 YaBrowser/20.6.3.54 Mobile Safari/537.36'
					]
				}
			}
		}
	},
	iOS: {
		v11: {
			Firefox: {
				v29: {
					iPad: [
						'Mozilla/5.0 (iPad; CPU OS 11_0_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) FxiOS/29.0 Mobile/15E148 Safari/605.1.15'
					],
					iPhone: [
						'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) FxiOS/29.0 Mobile/15E148 Safari/605.1.15'
					],
					iPod: [
						'Mozilla/5.0 (iPod touch; CPU iPhone OS 11_0_1 like Mac OS X) AppleWebKit/604.5.6 (KHTML, like Gecko) FxiOS/29.0 Mobile/15E148 Safari/605.1.15'
					]
				}
			}
		},
		v14: {
			Chrome: {
				v87: {
					iPad: [
						'Mozilla/5.0 (iPad; CPU OS 14_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/87.0.4280.77 Mobile/15E148 Safari/604.1'
					],
					iPhone: [
						'Mozilla/5.0 (iPhone; CPU iPhone OS 14_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/87.0.4280.77 Mobile/15E148 Safari/604.1'
					],
					iPod: [
						'Mozilla/5.0 (iPod; CPU iPhone OS 14_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/87.0.4280.77 Mobile/15E148 Safari/604.1'
					]
				}
			},
			EdgeIOS: {
				v45: {
					iPhone: [
						'Mozilla/5.0 (iPhone; CPU iPhone OS 14_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0 EdgiOS/45.11.1 Mobile/15E148 Safari/605.1.15'
					]
				}
			},
			Safari: {
				v14: {
					iPad: [
						'Mozilla/5.0 (iPad; CPU OS 14_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0 Mobile/15E148 Safari/604.1'
					],
					iPhone: [
						'Mozilla/5.0 (iPhone; CPU iPhone OS 14_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0 Mobile/15E148 Safari/604.1'
					],
					iPod: [
						'Mozilla/5.0 (iPod touch; CPU iPhone 14_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0 Mobile/15E148 Safari/604.1'
					]
				}
			},
			Yandex: {
				v20: {
					iPad: [
						'Mozilla/5.0 (iPad; CPU OS 14_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0 YaBrowser/20.9.3.324 Mobile/15E148 Safari/605.1'
					],
					iPhone: [
						'Mozilla/5.0 (iPhone; CPU iPhone OS 14_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0 YaBrowser/20.9.3.324 Mobile/15E148 Safari/604.1'
					],
					iPod: [
						'Mozilla/5.0 (iPod touch; CPU iPhone 14_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0 YaBrowser/20.9.3.324 Mobile/15E148 Safari/605.1'
					]
				}
			}
		}
	},
	Linux: {
		Chrome: {
			v87: {
				Standard: [
					'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.66 Safari/537.36'
				]
			}
		},
		Firefox: {
			v83: {
				Standard: [
					'Mozilla/5.0 (X11; Linux i686; rv:83.0) Gecko/20100101 Firefox/83.0',
					'Mozilla/5.0 (Linux x86_64; rv:83.0) Gecko/20100101 Firefox/83.0',
					'Mozilla/5.0 (X11; Ubuntu; Linux i686; rv:83.0) Gecko/20100101 Firefox/83.0',
					'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:83.0) Gecko/20100101 Firefox/83.0',
					'Mozilla/5.0 (X11; Fedora; Linux x86_64; rv:83.0) Gecko/20100101 Firefox/83.0'
				]
			}
		},
		Opera: {
			v72: {
				Standard: [
					'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.66 Safari/537.36 OPR/72.0.3815.378'
				]
			}
		},
		Vivaldi: {
			v3_4: {
				Standard: [
					'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.66 Safari/537.36 Vivaldi/3.4',
					'Mozilla/5.0 (X11; Linux i686) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.66 Safari/537.36 Vivaldi/3.4'
				]
			}
		}
	},
	macOS: {
		// 10.6
		'Snow Leopard': {
			Safari: {
				v4: {
					Standard: [
						'Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_8; en-us) AppleWebKit/531.22.7 (KHTML, like Gecko) Version/4.0.5 Safari/531.22.7'
					]
				},
				v5: {
					Standard: [
						'Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_8; en-us) AppleWebKit/533.21.1 (KHTML, like Gecko) Version/5.0.5 Safari/533.21.1',
						'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_6_8) AppleWebKit/534.59.8 (KHTML, like Gecko) Version/5.1.9 Safari/534.59.8'
					]
				}
			}
		},
		// 10.7
		Lion: {
			Safari: {
				v5: {
					Standard: [
						'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_7_5) AppleWebKit/534.57.7 (KHTML, like Gecko) Version/5.1.5 Safari/534.55.3'
					]
				},
				v6: {
					Standard: [
						'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_7_5) AppleWebKit/536.30.1 (KHTML, like Gecko) Version/6.0.5 Safari/536.30.1'
					]
				}
			}
		},
		// 10.8
		'Mountain Lion': {
			Safari: {
				v6: {
					Standard: [
						'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_5) AppleWebKit/600.8.9 (KHTML, like Gecko) Version/6.2.8 Safari/537.85.17'
					]
				}
			}
		},
		// 10.9
		Mavericks: {
			Safari: {
				v7: {
					Standard: [
						'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_5) AppleWebKit/600.8.9 (KHTML, like Gecko) Version/7.1.8 Safari/537.85.17'
					]
				}
			}
		},
		// 10.10
		Yosemite: {
			Safari: {
				v8: {
					Standard: [
						'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_5) AppleWebKit/600.8.9 (KHTML, like Gecko) Version/8.0.8 Safari/600.8.9'
					]
				}
			}
		},
		// 10.11
		'El Capitan': {
			Safari: {
				v9: {
					Standard: [
						'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/601.7.8 (KHTML, like Gecko) Version/9.1.3 Safari/601.7.8'
					]
				}
			}
		},
		// 10.12
		Sierra: {
			Edge: {
				v80: {
					Standard: [
						'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.116 Safari/537.36 Edg/80.0.361.57'
					]
				},
				v81: {
					Standard: [
						'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.92 Safari/537.36 Edg/81.0.416.53'
					]
				},
				v83: {
					Standard: [
						'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.61 Safari/537.36 Edg/83.0.478.37'
					]
				},
				v84: {
					Standard: [
						'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.89 Safari/537.36 Edg/84.0.522.40'
					]
				},
				v85: {
					Standard: [
						'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.83 Safari/537.36 Edg/85.0.564.41'
					]
				},
				v86: {
					Standard: [
						'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.75 Safari/537.36 Edg/86.0.622.38'
					]
				},
				v87: {
					Standard: [
						'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.66 Safari/537.36 Edg/87.0.664.41'
					]
				}
			},
			Safari: {
				v10: {
					Standard: [
						'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/603.3.8 (KHTML, like Gecko) Version/10.1.2 Safari/603.3.8'
					]
				}
			}
		},
		// 10.13
		'High Sierra': {
			Edge: {
				v80: {
					Standard: [
						'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.116 Safari/537.36 Edg/80.0.361.57'
					]
				},
				v81: {
					Standard: [
						'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.92 Safari/537.36 Edg/81.0.416.53'
					]
				},
				v83: {
					Standard: [
						'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.61 Safari/537.36 Edg/83.0.478.37'
					]
				},
				v84: {
					Standard: [
						'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.89 Safari/537.36 Edg/84.0.522.40'
					]
				},
				v85: {
					Standard: [
						'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.83 Safari/537.36 Edg/85.0.564.41'
					]
				},
				v86: {
					Standard: [
						'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.75 Safari/537.36 Edg/86.0.622.38'
					]
				},
				v87: {
					Standard: [
						'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.66 Safari/537.36 Edg/87.0.664.41'
					]
				}
			},
			Safari: {
				v11: {
					Standard: [
						'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/11.1.2 Safari/605.1.15'
					]
				}
			}
		},
		// 10.14
		Mojave: {
			Edge: {
				v80: {
					Standard: [
						'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.116 Safari/537.36 Edg/80.0.361.57'
					]
				},
				v81: {
					Standard: [
						'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.92 Safari/537.36 Edg/81.0.416.53'
					]
				},
				v83: {
					Standard: [
						'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.61 Safari/537.36 Edg/83.0.478.37'
					]
				},
				v84: {
					Standard: [
						'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.89 Safari/537.36 Edg/84.0.522.40'
					]
				},
				v85: {
					Standard: [
						'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.83 Safari/537.36 Edg/85.0.564.41'
					]
				},
				v86: {
					Standard: [
						'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.75 Safari/537.36 Edg/86.0.622.38'
					]
				},
				v87: {
					Standard: [
						'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.66 Safari/537.36 Edg/87.0.664.41'
					]
				}
			},
			Safari: {
				v12: {
					Standard: [
						'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.1.2 Safari/605.1.15'
					]
				}
			}
		},
		// 10.15
		Catalina: {
			Edge: {
				v80: {
					Standard: [
						'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.116 Safari/537.36 Edg/80.0.361.57'
					]
				},
				v81: {
					Standard: [
						'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.92 Safari/537.36 Edg/81.0.416.53'
					]
				},
				v83: {
					Standard: [
						'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.61 Safari/537.36 Edg/83.0.478.37'
					]
				},
				v84: {
					Standard: [
						'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.89 Safari/537.36 Edg/84.0.522.40'
					]
				},
				v85: {
					Standard: [
						'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.83 Safari/537.36 Edg/85.0.564.41'
					]
				},
				v86: {
					Standard: [
						'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.75 Safari/537.36 Edg/86.0.622.38'
					]
				},
				v87: {
					Standard: [
						'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.66 Safari/537.36 Edg/87.0.664.41'
					]
				}
			},
			Firefox: {
				v76: {
					Standard: [
						'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:76.0) Gecko/20100101 Firefox/76.0'
					]
				},
				v77: {
					Standard: [
						'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:77.0) Gecko/20100101 Firefox/77.0'
					]
				},
				v78: {
					Standard: [
						'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:78.0) Gecko/20100101 Firefox/78.0'
					]
				},
				v79: {
					Standard: [
						'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:79.0) Gecko/20100101 Firefox/79.0'
					]
				},
				v80: {
					Standard: [
						'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:80.0) Gecko/20100101 Firefox/80.0'
					]
				},
				v81: {
					Standard: [
						'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:81.0) Gecko/20100101 Firefox/81.0'
					]
				},
				v82: {
					Standard: [
						'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:82.0) Gecko/20100101 Firefox/82.0'
					]
				},
				v83: {
					Standard: [
						'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:83.0) Gecko/20100101 Firefox/83.0'
					]
				},
				v84: {
					Standard: [
						'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:84.0) Gecko/20100101 Firefox/84.0'
					]
				}
			},
			Safari: {
				v13: {
					Standard: [
						'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.1.2 Safari/605.1.15'
					]
				}
			}
		},
		// 11
		'Big Sur': {
			Chrome: {
				v87: {
					Standard: [
						'Mozilla/5.0 (Macintosh; Intel Mac OS X 11_0_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.66 Safari/537.36'
					]
				}
			},
			Edge: {
				v80: {
					Standard: [
						'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_16_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.116 Safari/537.36 Edg/80.0.361.57'
					]
				},
				v81: {
					Standard: [
						'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_16_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.92 Safari/537.36 Edg/81.0.416.53'
					]
				},
				v83: {
					Standard: [
						'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_16_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.61 Safari/537.36 Edg/83.0.478.37'
					]
				},
				v84: {
					Standard: [
						'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_16_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.89 Safari/537.36 Edg/84.0.522.40'
					]
				},
				v85: {
					Standard: [
						'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_16_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.83 Safari/537.36 Edg/85.0.564.41'
					]
				},
				v86: {
					Standard: [
						'Mozilla/5.0 (Macintosh; Intel Mac OS X 11_0_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.75 Safari/537.36 Edg/86.0.622.38'
					]
				},
				v87: {
					Standard: [
						'Mozilla/5.0 (Macintosh; Intel Mac OS X 11_0_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.66 Safari/537.36 Edg/87.0.664.47'
					]
				}
			},
			Firefox: {
				v76: {
					Standard: [
						'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.16; rv:76.0) Gecko/20100101 Firefox/76.0'
					]
				},
				v77: {
					Standard: [
						'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.16; rv:77.0) Gecko/20100101 Firefox/77.0'
					]
				},
				v78: {
					Standard: [
						'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.16; rv:78.0) Gecko/20100101 Firefox/78.0'
					]
				},
				v79: {
					Standard: [
						'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.16; rv:79.0) Gecko/20100101 Firefox/79.0'
					]
				},
				v80: {
					Standard: [
						'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.16; rv:80.0) Gecko/20100101 Firefox/80.0'
					]
				},
				v81: {
					Standard: [
						'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.16; rv:81.0) Gecko/20100101 Firefox/81.0'
					]
				},
				v82: {
					Standard: [
						'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.16; rv:82.0) Gecko/20100101 Firefox/82.0'
					]
				},
				v83: {
					Standard: [
						'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.16; rv:83.0) Gecko/20100101 Firefox/83.0',
						'Mozilla/5.0 (Macintosh; Intel Mac OS X 11.0; rv:83.0) Gecko/20100101 Firefox/83.0'
					]
				},
				v84: {
					Standard: [
						'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.16; rv:84.0) Gecko/20100101 Firefox/84.0'
					]
				}
			},
			Opera: {
				v72: {
					Standard: [
						'Mozilla/5.0 (Macintosh; Intel Mac OS X 11_0_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.66 Safari/537.36 OPR/72.0.3815.378'
					]
				}
			},
			Safari: {
				v14: {
					Standard: [
						'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_16_0) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0.1 Safari/605.1.15',
						'Mozilla/5.0 (Macintosh; Intel Mac OS X 11_0_1) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0.1 Safari/605.1.15'
					]
				}
			},
			Vivaldi: {
				v3_4: {
					Standard: [
						'Mozilla/5.0 (Macintosh; Intel Mac OS X 11_0_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.66 Safari/537.36 Vivaldi/3.4'
					]
				}
			},
			Yandex: {
				v20: {
					Standard: [
						'Mozilla/5.0 (Macintosh; Intel Mac OS X 11_0_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.66 YaBrowser/20.11.0 Yowser/2.5 Safari/537.36'
					]
				}
			}
		}
	},
	Windows: {
		XP: {
			InternetExplorer: {
				v8: {
					Standard: [
						'Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 5.1; Trident/4.0)'
					]
				}
			}
		},
		Vista: {
			InternetExplorer: {
				v8: {
					Standard: [
						'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.0; WOW64; Trident/4.0;)'
					]
				},
				v9: {
					Standard: ['Mozilla/4.0 (compatible; MSIE 9.0; Windows NT 6.0)']
				}
			}
		},
		v7: {
			InternetExplorer: {
				v8: {
					Standard: [
						'Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.1; Trident/4.0)'
					]
				},
				v9: {
					Standard: ['Mozilla/4.0 (compatible; MSIE 9.0; Windows NT 6.1)']
				},
				v10: {
					Standard: [
						'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.1; WOW64; Trident/6.0)'
					]
				},
				v11: {
					Standard: [
						'Mozilla/5.0 (Windows NT 6.1; Trident/7.0; rv:11.0) like Gecko'
					]
				}
			}
		},
		v8: {
			InternetExplorer: {
				v10: {
					Standard: ['Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2)']
				},
				v11: {
					Standard: [
						'Mozilla/5.0 (Windows NT 6.2; Trident/7.0; rv:11.0) like Gecko'
					]
				}
			}
		},
		v8_1: {
			InternetExplorer: {
				v11: {
					Standard: [
						'Mozilla/5.0 (Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko'
					]
				}
			}
		},
		v10: {
			Chrome: {
				v87: {
					Standard: [
						'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Safari/537.36',
						'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.66 Safari/537.36',
						'Mozilla/5.0 (Windows NT 10.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.66 Safari/537.36'
					]
				}
			},
			Edge: {
				v15: {
					Standard: [
						'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/52.0.2743.116 Safari/537.36 Edge/15.15063'
					]
				},
				v16: {
					Standard: [
						'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36 Edge/16.16299'
					]
				},
				v17: {
					Standard: [
						'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.140 Safari/537.36 Edge/17.17134'
					]
				},
				v18: {
					Standard: [
						'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.102 Safari/537.36 Edge/18.18363'
					]
				},
				v80: {
					Standard: [
						'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.122 Safari/537.36 Edg/80.0.361.62'
					]
				},
				v81: {
					Standard: [
						'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.92 Safari/537.36 Edg/81.0.416.53'
					]
				},
				v83: {
					Standard: [
						'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.61 Safari/537.36 Edg/83.0.478.37'
					]
				},
				v84: {
					Standard: [
						'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.89 Safari/537.36 Edg/84.522.40'
					]
				},
				v85: {
					Standard: [
						'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.83 Safari/537.36 Edg/85.0.564.41'
					]
				},
				v86: {
					Standard: [
						'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.75 Safari/537.36 Edg/86.0.622.38'
					]
				},
				v87: {
					Standard: [
						'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Safari/537.36 Edg/87.0.664.57'
					]
				}
			},
			InternetExplorer: {
				v11: {
					Standard: [
						'Mozilla/5.0 (Windows NT 10.0; Trident/7.0; rv:11.0) like Gecko',
						'Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; .NET4.0C; .NET4.0E; Zoom 3.6.0; rv:11.0) like Gecko'
					]
				}
			},
			Firefox: {
				v83: {
					Standard: [
						'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:83.0) Gecko/20100101 Firefox/83.0'
					]
				},
				v84: {
					Standard: [
						'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:84.0) Gecko/20100101 Firefox/84.0'
					]
				}
			},
			Opera: {
				v72: {
					Standard: [
						'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.66 Safari/537.36 OPR/72.0.3815.378',
						'Mozilla/5.0 (Windows NT 10.0; WOW64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.66 Safari/537.36 OPR/72.0.3815.378'
					]
				}
			},
			Vivaldi: {
				v3_4: {
					Standard: [
						'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Safari/537.36 Vivaldi/3.4.2066.106',
						'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.66 Safari/537.36 Vivaldi/3.4',
						'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.66 Safari/537.36 Vivaldi/3.4'
					]
				},
				v3_5: {
					Standard: [
						'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Safari/537.36 Vivaldi/3.5.2115.73',
						'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.107 Safari/537.36 Vivaldi/3.5.2115.81'
					]
				},
				v3_6: {
					Standard: [
						'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.99 Safari/537.36 Vivaldi/3.6.2165.34'
					]
				}
			},
			Yandex: {
				v20: {
					Standard: [
						'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.66 YaBrowser/20.11.0 Yowser/2.5 Safari/537.36',
						'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.66 YaBrowser/20.11.0 Yowser/2.5 Safari/537.36'
					]
				}
			}
		}
	},
	WindowsMobile: {
		Edge: {
			v40: {
				Standard: [
					'Mozilla/5.0 (Windows Mobile 10; Android 10.0; Microsoft; Lumia 950XL) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.66 Mobile Safari/537.36 Edge/40.15254.603'
				]
			}
		}
	},
	Xbox: {
		// https://techcommunity.microsoft.com/t5/discussions/new-microsoft-edge-for-xbox-one/m-p/1405502
		Edge: {
			v44: {
				Standard: [
					'Mozilla/5.0 (Windows NT 10.0; Win64; x64; Xbox; Xbox One) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.66 Safari/537.36 Edge/44.18363.8131'
				]
			}
		}
	}
};

interface Obj {
	[p: string]: Obj | string[] | null;
}

export const deepFlatFromObject = (data: Obj | string[] | null): string[] => {
	if (data === null) {
		return [];
	} else if (Array.isArray(data)) {
		return data;
	} else {
		const arr: string[] = [];
		for (const key in data) {
			if (data.hasOwnProperty(key)) {
				arr.push(...deepFlatFromObject(data[key]));
			}
		}
		return arr;
	}
};

export const testHelper = (
	detect: (ua: string) => boolean,
	shouldPass: string[],
	shouldNotPass: string[]
) => {
	if (shouldPass.length) {
		describe('Should pass', () => {
			shouldPass.forEach((ua, i) => {
				test(`Case #${++i}: ${ua}`, () => {
					browserizr.setUA(ua);
					expect(browserizr.detect(detect)).toBeTruthy();
				});
			});
		});
	}

	if (shouldNotPass.length) {
		describe('Should not pass', () => {
			shouldNotPass.forEach((ua, i) => {
				test(`Case #${++i}: ${ua}`, () => {
					browserizr.setUA(ua);
					expect(browserizr.detect(detect)).toBeFalsy();
				});
			});
		});
	}
};

export function testVersionsHelper<Version = number>(
	version: Version,
	operator: DetectVersionOperator,
	detectVersion: (
		operator: DetectVersionOperator,
		version: Version
	) => (ua: string) => boolean,
	shouldBe: string[],
	shouldNotBe: string[]
) {
	if (shouldBe.length) {
		describe(`Should be ${operator}`, () => {
			shouldBe.forEach((ua, i) => {
				test(`Case #${++i}: ${ua}`, () => {
					browserizr.setUA(ua);
					const result = browserizr.detect(detectVersion(operator, version));
					expect(result).toBeTruthy();
				});
			});
		});
	}

	if (shouldNotBe.length) {
		describe(`Should not be ${operator}`, () => {
			shouldNotBe.forEach((ua, i) => {
				test(`Case #${++i}: ${ua}`, () => {
					browserizr.setUA(ua);
					const result = browserizr.detect(detectVersion(operator, version));
					expect(result).toBeFalsy();
				});
			});
		});
	}
}

export function testVersionsListHelper<Version = number>(
	detectVersion: (
		operator: DetectVersionOperator,
		version: Version
	) => (ua: string) => boolean,
	versions: { version: Version; values: string[] }[]
) {
	versions.forEach(({ version, values: currentVersions }, i) => {
		if (currentVersions.length) {
			const prevVersions = versions
				.filter((v, j) => j < i)
				.reduce<string[]>((acc, { values }) => acc.concat(values), []);

			const nextVersions = versions
				.filter((v, j) => j > i)
				.reduce<string[]>((acc, { values }) => acc.concat(values), []);

			describe(String(version), () => {
				testVersionsHelper<Version>(
					version,
					EQUAL,
					detectVersion,
					[...currentVersions],
					[...prevVersions, ...nextVersions]
				);

				testVersionsHelper<Version>(
					version,
					MORE_THEN_OR_EQUAL,
					detectVersion,
					[...currentVersions, ...nextVersions],
					[...prevVersions]
				);
				testVersionsHelper<Version>(
					version,
					LESS_THEN_OR_EQUAL,
					detectVersion,
					[...currentVersions, ...prevVersions],
					[...nextVersions]
				);
			});
		}
	});
}
