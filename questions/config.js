export default 
{
	"containerID": "flowquest_container",
	"usePushState" : false,
	"questions": {
		"1": {
			"question": "Qual tipo de alteração você observa?",
			"options": {
				"color-translucid": {
					"label": "Coloração/Translucidez",
					"val": "color-translucid",
					"nextQ": 2
				},
				"color-thickness": {
					"label": "Coloração e Espessura",
					"val": "color-thickness",
					"nextQ": 8
				},
				"thickness": {
					"label": "Espessura",
					"val": "thickness",
					"nextQ": 8
				}
			}
		}
		, "2": {
			"question": "Opacidade apresenta nítida margem entre esmalte alterado e normal?",
			"options": {
				"yes": {
					"label": "Sim",
					"val": "opacity-margin-yes",
					"nextQ": 3
				},
				"no": {
					"label": "Não",
					"val": "opacity-margin-no",
					"nextQ": 4
				}
			}
		}
		, "3": {
			"question": "Essa alteração está presente em algum dos primeiros molares permanentes?",
			"options": {
				"yes": {
					"label": "Sim",
					"val": "hmi",
					"nextQ": null
				},
				"no": {
					"label": "Não",
					"val": "demarcated-opacity",
					"nextQ": null
				}
			}
		}
		, "4": {
			"question": "Essas alterações estão presentes em dentes homólogos em um padrão linear e simétrico?",
			"options": {
				"yes": {
					"label": "Sim",
					"val": "simetric-yes",
					"nextQ": 5
				},
				"no": {
					"label": "Não",
					"val": "simetric-no",
					"nextQ": null
				}
			}
		}
		, "5": {
			"question": "O paciente ingere/ingeria creme dental com flúor ou mora em áreas endêmicas de alta quantidade de flúor nos lençóis freáticos?",
			"options": {
				"yes": {
					"label": "Sim",
					"val": "dental-fluorosis",
					"nextQ": null
				},
				"no": {
					"label": "Não",
					"val": "fluor-no",
					"nextQ": 6
				}
			}
		}
		, "6": {
			"question": "O paciente já usou aparelho ortodôntico?",
			"options": {
				"yes": {
					"label": "Sim",
					"val": "dental-braces-yes",
					"nextQ": 7
				},
				"no": {
					"label": "Não",
					"val": "dental-braces-no",
					"nextQ": 8
				}
			}
		}
		, "7": {
			"question": "Essa alteração se parece com alguma das imagens abaixo?",
			"options": {
				"yes": {
					"label": "Sim",
					"val": "img-yes",
					"nextQ": null
				},
				"no": {
					"label": "Não",
					"val": "img-no",
					"nextQ": null
				}
			}
		}
        , "8": {
			"question": "Investigue uso de sulfato ferroso e/ou tetraciclina. Essa alteração se parece com alguma das imagens abaixo?",
			"options": {
				"tetracycline": {
					"label": "to-do: imagens tetraciclina",
					"val": "tetracycline",
					"nextQ": null
				},
				"ferrous-sulfate": {
					"label": "to-do: imagens sufato ferroso",
					"val": "ferrous-sulfate",
					"nextQ": null
				},
				"no": {
					"label": "Não",
					"val": "img-no",
					"nextQ": null
				}
			}
		}
	},
	"answers": {
		"patterns": {
			"color-translucid|opacity-margin-yes|hmi|": {
				"position": "Você provavelmente está a frente de uma lesão de hmi!",
				"content": "A hipomineralização molar-incisivo (HMI) é um defeito de desenvolvimento do esmalte que afeta um ou até os quatro primeiros molares permanentes, associados ou não à alterações nos incisivos e segundos molares. É caracterizada por opacidades demarcadas de cor branca, amarela ou amarronzadas, principalmente nas superfícies oclusais e vestibulares. O esmalte afetado por essa condição geralmente é considerado frágil devido sua maciez e porosidade, sendo mais suscetível a fraturas devido aos esforços mastigatórios. Para mais informações acesse os artigos abaixo ou entre em contato com o nosso grupo."
			}
			, "color-translucid|opacity-margin-yes|demarcated-opacity|": {
				"position": "Você está provavelmente à frente de uma opacidade demarcada!",
				"content": "A opacidade demarcada é uma hipomineralização do esmalte dentário, que ocorre devido a distúrbios na fase de maturação ou mineralização da matriz e gera alterações na translucidez ou opacidade do esmalte, mas sem perda estrutural. Clinicamente, apresenta translucidez de grau variável no esmalte, com limites nítidos e coloração esbranquiçada e/ou amarelada! Para mais informações acesse os artigos abaixo ou entre em contato com o nosso grupo."
			}
			, "color-translucid|opacity-margin-no|simetric-yes|dental-fluorosis|": {
				"position": "Você provavelmente está a frente de uma fluorose!",
				"content": "todo"
			}
			, "color-translucid|opacity-margin-no|simetric-yes|fluor-no|dental-braces-yes|img-yes|": {
                "position": "Você provavelmente está a frente de uma lesão cariosa!",
				"content": "todo"
			}
			, "color-translucid|opacity-margin-no|simetric-yes|fluor-no|dental-braces-yes|img-no|": {
                "position": "Observe novamente a localização e as características clínicas da lesão e recomece ou entre em contato com o nosso grupo!",
				"content": "todo"
			}
			, "color-translucid|opacity-margin-no|simetric-yes|fluor-no|dental-braces-no|tetracycline|": {
                "position": "Manchamento por tetraciclina",
				"content": "O manchamento por tetraciclina ocorre quando o antibiótico é ingerido no período de formação dos dentes e suas moléculas são incorporadas à dentina, conferindo uma coloração acinzentada, amarelada ou até mesmo marrom escuro! Para mais informações acesse os artigos abaixo ou entre em contato com o nosso grupo."
			}
			, "color-translucid|opacity-margin-no|simetric-yes|fluor-no|dental-braces-no|ferrous-sulfate|": {
                "position": "Manchamento por sufato ferroso",
				"content": "O sulfato ferroso é utilizado como suplementação para crianças de até 2 anos de idade e pode provocar manchamentos provisórios ou definitivos nas superfícies dentárias! Clinicamente, se apresenta como manchas, linhas e/ou pontilhados negros, acinzentados ou na cor ferrugem. Para mais informações acesse os artigos abaixo ou entre em contato com o nosso grupo."
			}
			, "color-translucid|opacity-margin-no|simetric-yes|fluor-no|dental-braces-no|img-no|": {
                "position": "Observe novamente a localização e as características clínicas da lesão e recomece ou entre em contato com o nosso grupo!",
				"content": "todo"
			}
            , "color-translucid|opacity-margin-no|simetric-no|": {
                "position": "Você provavelmente está a frente de uma opacidade difusa",
                "content": "As opacidades difusas são uma hipomineralização do esmalte dentário, que ocorre devido a distúrbios na fase de maturação ou mineralização da matriz e gera alterações na translucidez ou opacidade do esmalte, mas sem perda estrutural. Clinicamente, apresenta translucidez de grau variável no esmalte, com limites mal definidos, não sendo possível diferenciar exatamente qual é o esmalte normal e qual é o alterado, sua  coloração pode variar entre esbranquiçada e/ou amarelada! Para mais informações acesse os artigos abaixo ou entre em contato com o nosso grupo."
            }
		}
	}
}
