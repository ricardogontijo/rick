addScript('https://code.jquery.com/jquery-3.5.1.min.js');

setTimeout(function () {
    addScript('https://igorescobar.github.io/jQuery-Mask-Plugin/js/jquery.mask.min.js');
}, 500);
addScript('https://unpkg.com/axios/dist/axios.min.js');
setTimeout(function () {
    var htmlLoad = '<style type="text/css">' +
        '		#generation_1506220 .type input {' +
        '			cursor: pointer !important;' +
        '		}' +
        '' +
        '		#generation_1506220 .type:hover {' +
        '			border-color: rgba(32, 39, 97, 1);' +
        '			transition: all .2s ease-in-out;' +
        '		}' +
        '' +
        '		#generation_1506220 .type.active {' +
        '			border-color: rgba(32, 39, 97, 1) !important' +
        '		}' +
        '' +
        '		#generation_1506220 input {' +
        '			outline: none !important;' +
        '			transition: all .4s ease-in-out;' +
        '		}' +
        '' +
        '		#generation_1506220 input:focus {' +
        '			border-color: rgb(45, 51, 100) !important;' +
        '			box-shadow: 1px 5px 20px rgba(000, 000, 000, .1)' +
        '		}' +
        '' +
        '		#generation_1506220 button:hover {' +
        '			background-color: rgb(45, 51, 100) !important;' +
        '			color: #ffffff !important;' +
        '			transition: all .2s ease-in-out;' +
        '		}' +
        '' +
        '		#generation_1506220 button:hover span {' +
        '			color: #ffffff !important;' +
        '		}' +
        '       @media all and(max - width: 500px) {'+
        '           h1 {'+
        '           line - height: 2.5rem!important;'+
        '           font - size: 2rem!important;'+
        '           }'+
        '       }'+
        '	</style>' +
        '	<section id="generation_1506220" style="text-align: center;width: 100%;max-width: 700px;margin: 0 auto;">' +
        '		<div class="content-first">' +
        '			<header style="font-weight: bold;font-family: sans-serif;color:rgb(45, 51, 100);margin-bottom: 4rem">' +
        '				<h1 style="font-size: 3.5rem;line-height: 7rem">' +
        '					' +
        '					<div class="line"' +
        '						style="width: 200px;background-color: #FEC171;display: block;height: 2px;margin: 0px auto">' +
        '					</div>' +
        '				</h1>' +
        '				<p style="font-size: 1rem;margin-top: -1rem">' +
        '					' +
        '				</p>' +
        '			</header>' +
        '			<div class="generation__form" style="text-align: center">' +
        '				<form id="form">' +
        '					<div class="selects" style="display: block;margin: 0 auto;text-align: center">' +
        '						<ul' +
        '							style="list-style: none;display: flex;align-items: center;justify-content: center;padding: 0px;margin: 0px;flex-wrap: wrap">' +
        '							<li>' +
        '								<div class="type" data-type="residencial"' +
        '									style="position: relative;border:2px solid rgba(32, 39, 97,0);margin: .5rem .5rem .5rem 0rem;box-shadow: 8px 5px 15px rgba(000,000,000,.2);border-radius: 8px;padding: .3rem 1.5rem;">' +
        '									<input type="radio" class="residencial"' +
        '										style="opacity: 0;position: absolute;top:0;width: 100%;height:100%;left: 0;"' +
        '										value="PF" name="tipoLead">' +
        '									<div>' +
        '										<img src="https://gestao.appsafeleads.com.br/img/residencial.svg" style="height:60px;margin-top: .5rem">' +
        '										<span' +
        '											style="display: block;font-weight: bold;color:rgb(45, 51, 100);font-size: 1rem;margin:.5rem;font-family: sans-serif;">' +
        '											Residêncial' +
        '										</span>' +
        '									</div>' +
        '								</div>' +
        '							</li>' +
        '							<li>' +
        '								<div class="type" data-type="comercial"' +
        '									style="position: relative;border:2px solid rgba(32, 39, 97,0);margin: .5rem;box-shadow: 8px 5px 15px rgba(000,000,000,.2);border-radius: 8px;padding: .3rem 1.5rem;">' +
        '									<input type="radio" class="comercial"' +
        '										style="opacity: 0;position: absolute;top:0;width: 100%;height:100%;left: 0;"' +
        '										value="PJ" name="tipoLead">' +
        '									<div>' +
        '										<img src="https://gestao.appsafeleads.com.br/img/comercial.svg" style="height:60px;margin-top: .5rem">' +
        '										<span' +
        '											style="display: block;font-weight: bold;color:rgb(45, 51, 100);font-size: 1rem;margin:.5rem;font-family: sans-serif;">' +
        '											Comercial' +
        '										</span>' +
        '									</div>' +
        '								</div>' +
        '							</li>' +
        '							<li>' +
        '								<div class="type" data-type="industrial"' +
        '									style="position: relative;border:2px solid rgba(32, 39, 97,0);margin: .5rem;box-shadow: 8px 5px 15px rgba(000,000,000,.2);border-radius: 8px;padding: .3rem 1.5rem;">' +
        '									<input type="radio" class="industrial"' +
        '										style="opacity: 0;position: absolute;top:0;width: 100%;height:100%;left: 0;"' +
        '										value="PJ" name="tipoLead">' +
        '									<div>' +
        '										<img src="https://gestao.appsafeleads.com.br/img/industrial.svg" style="height:60px;margin-top: .5rem">' +
        '										<span' +
        '											style="display: block;font-weight: bold;color:rgb(45, 51, 100);font-size: 1rem;margin:.5rem;font-family: sans-serif;">' +
        '											Industrial' +
        '										</span>' +
        '									</div>' +
        '								</div>' +
        '							</li>' +
        '							<li>' +
        '								<div class="type" data-type="rural"' +
        '									style="position: relative;border:2px solid rgba(32, 39, 97,0);margin: .5rem 0rem .5rem .5rem;box-shadow: 8px 5px 15px rgba(000,000,000,.2);border-radius: 8px;padding: .3rem 1.5rem;">' +
        '									<input type="radio" class="rural"' +
        '										style="opacity: 0;position: absolute;top:0;width: 100%;height:100%;left: 0;"' +
        '										value="PJ" name="tipoLead">' +
        '									<div>' +
        '										<img src="https://gestao.appsafeleads.com.br/img/rural.svg" style="height:60px;margin-top: .5rem">' +
        '										<span' +
        '											style="display: block;font-weight: bold;color:rgb(45, 51, 100);font-size: 1rem;margin:.5rem;font-family: sans-serif;">' +
        '											Rural' +
        '										</span>' +
        '									</div>' +
        '								</div>' +
        '							</li>' +
        '						</ul>' +
        '					</div>' +
        '					<div class="content-input"' +
        '						style="display: flex;justify-content: space-between;flex-wrap: wrap;width: 88%;margin: 0 auto;margin-top: 1.5rem;">' +
        '						<div style="width: 48%;margin-top: 1rem">' +
        '							<input class="custom"' +
        '								style="border-color: rgba(000,000,000,.1);width:90%;border-radius: 12px;padding: .8rem;font-size: 1rem"' +
        '								name="nome" required="Nome Obrigatorio" placeholder="Seu nome*" type="text"></input>' +
        '						</div>' +
        '						<div style="width: 48%;margin-top: 1rem">' +
        '							<input class="custom"' +
        '								style="border-color: rgba(000,000,000,.1);width:90%;border-radius: 12px;padding: .8rem;font-size: 1rem"' +
        '								name="celular" required="Telefone Obrigatorio" placeholder="Seu telefone*"' +
        '								type="text"></input>' +
        '						</div>' +
        '						<div style="width: 95%;margin-top: 1rem;margin-left: 1rem;">' +
        '							<input class="custom"' +
        '								style="border-color: rgba(000,000,000,.1);width:100%;border-radius: 12px;padding: .8rem;font-size: 1rem"' +
        '								name="email" required="E-mail Obrigatorio" placeholder="Seu e-mail*"' +
        '								type="text"></input>' +
        '						</div>' +
        '						<!-- ================ Endereço ======================= -->' +
        '' +
        '						<div style="width:100%;text-align: center">' +
        '							<h1 style="font-size: 2rem;line-height: 3rem;font-family: sans-serif;">Endereço</h1>' +
        '						</div>' +
        '						<div style="width: 48%;margin-top: 0rem">' +
        '							<input class="custom"' +
        '								style="border-color: rgba(000,000,000,.1);width:90%;border-radius: 12px;padding: .8rem;font-size: 1rem"' +
        '								name="endereco_cep" required="CEP Obrigatorio" id="cep" placeholder="CEP*"' +
        '								type="text"></input>' +
        '						</div>' +
        '						<div style="width: 48%;margin-top: 0rem">' +
        '							<input class="custom"' +
        '								style="border-color: rgba(000,000,000,.1);width:90%;border-radius: 12px;padding: .8rem;font-size: 1rem"' +
        '								name="endereco_logradouro" required="Logradouro Obrigatorio" id="logradouro"' +
        '								placeholder="Logradouro*" type="text"></input>' +
        '						</div>' +
        '						<div style="width: 48%;margin-top: 1rem">' +
        '							<input class="custom"' +
        '								style="border-color: rgba(000,000,000,.1);width:90%;border-radius: 12px;padding: .8rem;font-size: 1rem"' +
        '								name="endereco_numero" required="Numero Obrigatorio" id="numero" placeholder="Numero*"' +
        '								type="text"></input>' +
        '						</div>' +
        '						<div style="width: 48%;margin-top: 1rem">' +
        '							<input class="custom"' +
        '								style="border-color: rgba(000,000,000,.1);width:90%;border-radius: 12px;padding: .8rem;font-size: 1rem"' +
        '								name="endereco_bairro" required="Bairro Obrigatorio" id="bairro" placeholder="Bairro*"' +
        '								type="text"></input>' +
        '						</div>' +
        '						<div style="width: 48%;margin-top: 1rem">' +
        '							<input class="custom"' +
        '								style="border-color: rgba(000,000,000,.1);width:90%;border-radius: 12px;padding: .8rem;font-size: 1rem"' +
        '								name="endereco_cidade" required="Cidade Obrigatorio" id="cidade" placeholder="Cidade*"' +
        '								type="text"></input>' +
        '						</div>' +
        '						<div style="width: 48%;margin-top: 1rem">' +
        '							<input class="custom"' +
        '								style="border-color: rgba(000,000,000,.1);width:90%;border-radius: 12px;padding: .8rem;font-size: 1rem"' +
        '								name="endereco_uf" required="UF Obrigatorio" id="uf" placeholder="UF*"' +
        '								type="text"></input>' +
        '						</div>' +
        '						<!-- Consumo -->' +
        '						<hr style="width: 100%;margin-top: 1.5rem;opacity: .2" />' +
        '						<div style="width: 100%;margin-top: 1rem">' +
        '							<input type="text" name="kwh" placeholder="Consumo kWh*" value=""' +
        '								required="Consumo é Obrigatorio"' +
        '								style="border-color: rgba(000,000,000,.1);width: 95%;border-radius: 12px;padding: .8rem;font-size: 1rem">' +
        '						</div>' +
        '						<div style="text-align: center;width: 100%;margin: 2rem 0px">' +
        '							<button type="submit"' +
        '								style="border-radius: 10px;cursor:pointer;border: 2px solid rgb(45, 51, 100);color:rgb(45, 51, 100);font-size: 1rem;font-weight: bold;padding: .7rem;width: 200px;background-color: transparent;margin: 0 auto;display: block;">' +
        '								<span style="color:rgb(45, 51, 100)">' +
        '									Realizar Simulação' +
        '								</span>' +
        '							</button>' +
        '						</div>' +
        '					</div>' +
        '				</form>' +
        '			</div>' +
        '		</div>' +
        '		<div class="content-success" style="display: none">' +
        '			<h1 style="font-size: 2.5rem;line-height: 7rem;color:#30B08F;font-family: sans-serif;">' +
        '				Simulação enviada com sucesso!' +
        '			</h1>' +
        '			<span id="back"' +
        '				style="cursor: pointer;font-family: sans-serif;margin-top: -1rem;display: block;font-size: 1.23rem">' +
        '				Voltar para simulação' +
        '			</span>' +
        '		</div>';

    if (!$) {
        $ = jQuery;
    }
    $('#form-safe').html(htmlLoad);

    var frm = $('#generation_1506220 #form');
    $('#back').on('click', function (e) {
        $('#generation_1506220 .content-first').fadeIn(),
            $('#generation_1506220 .content-success').fadeOut();

        $('#generation_1506220 input[name=nome]').val("")
        $('#generation_1506220 input[name=celular]').val("")
        $('#generation_1506220 input[name=email]').val("")
        $('#generation_1506220 input[name=tipoLead]').val("")
        $('#generation_1506220 input[name=kwh]').val("")
        $("#generation_1506220 #tipoEstrutura option").text("")
        $('#generation_1506220 input[name=endereco_cep]').val()
        $('#generation_1506220 input[name=endereco_logradouro]').val("")
        $('#generation_1506220 input[name=endereco_bairro]').val("")
        $('#generation_1506220 input[name=endereco_cidade]').val("")
        $('#generation_1506220 input[name=endereco_numero]').val("")
        $('#generation_1506220 input[name=endereco_uf]').val("")
    })


    frm.submit(function (e) {
        e.preventDefault();

        let obj = {
            nome: $('#generation_1506220 input[name=nome]').val(),
            celular: $('#generation_1506220 input[name=celular]').val(),
            email: $('#generation_1506220 input[name=email]').val(),
            tipoLead: $('#generation_1506220 input[name=tipoLead]:checked').val(),
            kwh: $('#generation_1506220 input[name=kwh]').val(),
            //Endereço
            endereco: {
                CEP: $('#generation_1506220 input[name=endereco_cep]').val(),
                logradouro: $('#generation_1506220 input[name=endereco_logradouro]').val(),
                bairro: $('#generation_1506220 input[name=endereco_bairro]').val(),
                cidade: $('#generation_1506220 input[name=endereco_cidade]').val(),
                numero: $('#generation_1506220 input[name=endereco_numero]').val(),
                UF: $('#generation_1506220 input[name=endereco_uf]').val(),
            }
        }

        axios.post('https://jpnegocios.api.safeleads.app/api/Simulador/Externo?configId=21', obj)
            .then(function (response) {
                $('#generation_1506220 .content-first').fadeOut(),
                    $('#generation_1506220 .content-success').fadeIn();
            })
            .catch(function (error) {
                console.log(error);
            });

    });

    let type = $('.type');
    type.hover(function (e) {
        $(this).css({ 'border-color': 'rgba(32, 39, 97,1)' })
    }, function (e) {
        $(this).css({ 'border-color': 'rgba(32, 39, 97,0)' })
    })

    type.on('click', function (e) {
        type.removeClass('active');
        $(this).addClass('active')
    })


    //Mascaras
    $("#cep").mask("99.999-999");

    $("#cep").on('blur', function () {
        // Remove tudo o que não é número para fazer a pesquisa
        var cep = this.value.replace(/[^0-9]/g, "");
        // Validação do CEP; caso o CEP não possua 8 números, então cancela
        // a consulta
        if (cep.length !== 8) {
            return false;
        }

        // A url de pesquisa consiste no endereço do webservice + o cep que
        // o usuário informou + o tipo de retorno desejado (entre "json",
        // "jsonp", "xml", "piped" ou "querty")
        var url = "https://viacep.com.br/ws/" + cep + "/json/";

        // Faz a pesquisa do CEP, tratando o retorno com try/catch para que
        // caso ocorra algum erro (o cep pode não existir, por exemplo) a
        // usabilidade não seja afetada, assim o usuário pode continuar//
        // preenchendo os campos normalmente
        $.getJSON(url, function (dadosRetorno) {
            try {
                // Preenche os campos de acordo com o retorno da pesquisa
                $("#logradouro").val(dadosRetorno.logradouro);
                $("#bairro").val(dadosRetorno.bairro);
                $("#cidade").val(dadosRetorno.localidade);
                $("#uf").val(dadosRetorno.uf);
            } catch (ex) {
                //Mensagem de Erro
            }

        });

    });

}, 1000);
function addScript(src) {
    if (!isLoadedScript(src)) {
        var s = document.createElement('script');
        s.setAttribute('src', src);
        document.body.appendChild(s);
    }
}

function isLoadedScript(src) {
    return document.querySelectorAll('[src="' + src + '"]').length > 0;
}
