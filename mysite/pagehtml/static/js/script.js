$(document).ready(function () {
    var usersOn = [];
    var nomeChat = "";
    var maxOnToday = Math.floor(Math.random() * (21 - 7 + 1)) + 7;
    var qdeMsg = 0;
    var sortDialog = 0;
    var lastDialog = 0;
    var maeDialog = [
        "Quais são os sinais precoces do autismo que devo observar em meu filho?",
        "Como posso ajudar meu filho a lidar com mudanças na rotina?",
        "Quais estratégias posso usar para promover a comunicação verbal do meu filho?",
        "Quais terapias ou intervenções são mais eficazes para crianças autistas?",
        "Como posso lidar com os desafios de comportamento que meu filho enfrenta?",
        "Existe algum programa de inclusão escolar específico para crianças autistas?",
        "Como posso ajudar meu filho a desenvolver habilidades sociais e interações sociais adequadas?",
        "Quais são os possíveis efeitos colaterais dos medicamentos utilizados no tratamento do autismo?",
        "Existe algum suporte financeiro disponível para famílias de crianças autistas?",
        "Como posso envolver outros membros da família no apoio ao meu filho com autismo?",
        "Quais são os recursos locais disponíveis para famílias de crianças autistas?",
        "Como posso explicar o autismo aos irmãos do meu filho de uma maneira que eles possam entender?",
        "Quais são os sinais de alerta de uma crise ou sobrecarga sensorial em meu filho?",
        "Como posso ajudar meu filho a desenvolver habilidades de autocuidado e independência?",
        "Quais são as melhores estratégias para lidar com a ansiedade do meu filho autista?",
        "Quais são os principais desafios educacionais que meu filho pode enfrentar na escola?",
        "Como posso promover a inclusão social do meu filho autista em atividades extracurriculares?",
        "Quais são as expectativas realistas de progresso e desenvolvimento para uma criança com autismo?",
        "Existe alguma pesquisa recente ou avanços no campo do autismo que eu deveria conhecer?",
        "Como posso cuidar do meu próprio bem-estar emocional enquanto cuido do meu filho com autismo?"
    ];

    var psicologoDialog = [
        "Os sinais precoces do autismo incluem a falta de contato visual, atraso na fala, dificuldade de interação social e comportamentos repetitivos.",
        "Você pode ajudar seu filho a lidar com mudanças na rotina fornecendo previsibilidade, usando visualização e oferecendo apoio emocional.",
        "Existem várias estratégias que podem ser usadas para promover a comunicação verbal, como o uso de imagens visuais, terapia da fala e programas de intervenção especializados.",
        "As terapias mais eficazes para crianças autistas incluem terapia comportamental, terapia ocupacional e terapia de integração sensorial.",
        "Lidar com os desafios comportamentais envolve o estabelecimento de rotinas claras, o uso de reforço positivo e a implementação de estratégias de gerenciamento de comportamento.",
        "Existem programas de inclusão escolar específicos para crianças autistas, como salas de aula de ensino especializado e suporte individualizado.",
        "Promover habilidades sociais e interações sociais envolve o ensino de habilidades sociais, o uso de histórias sociais e a criação de oportunidades de interação social.",
        "Os medicamentos utilizados no tratamento do autismo podem ter efeitos colaterais, como sonolência, irritabilidade e perda de apetite. É importante monitorar de perto e discutir quaisquer preocupações com o médico.",
        "Existem programas e recursos financeiros disponíveis para famílias de crianças autistas, como subsídios, benefícios e seguro de saúde específico para autismo.",
        "Envolver outros membros da família no apoio ao seu filho com autismo pode incluir compartilhar informações, oferecer suporte emocional e colaborar em estratégias de intervenção.",
        "Os recursos locais para famílias de crianças autistas podem incluir grupos de apoio, centros de intervenção precoce, serviços de terapia especializada e programas educacionais.",
        "Ao explicar o autismo aos irmãos, é importante usar linguagem adequada à idade, oferecer informações claras e responder às suas perguntas com paciência e empatia.",
        "Os sinais de alerta de uma crise ou sobrecarga sensorial incluem comportamentos agitados, irritabilidade extrema, hipersensibilidade sensorial e tentativas de se isolar.",
        "Você pode ajudar seu filho a desenvolver habilidades de autocuidado e independência oferecendo suporte, ensinando etapas individuais e usando reforço positivo.",
        "As estratégias para lidar com a ansiedade em crianças autistas incluem a criação de rotinas calmantes, o uso de técnicas de relaxamento e a terapia cognitivo-comportamental.",
        "Os principais desafios educacionais podem incluir dificuldades de aprendizagem, necessidade de suporte individualizado e adaptações curriculares específicas.",
        "Promover a inclusão social pode envolver a participação em atividades extracurriculares inclusivas, o estabelecimento de amizades e o envolvimento em grupos de apoio.",
        "As expectativas de progresso e desenvolvimento para uma criança com autismo variam, mas é importante definir metas realistas e celebrar as conquistas individuais.",
        "A pesquisa no campo do autismo está em constante evolução, mas avanços recentes incluem estudos sobre terapias inovadoras, intervenções precoces e compreensão dos aspectos genéticos.",
        "Cuidar do seu próprio bem-estar emocional é fundamental. Priorize o autocuidado, busque apoio de outras pessoas e procure recursos para lidar com o estresse e o cansaço.",
    ];

    var pathList = [
        'autismo-na-infancia',
        'autismo-na-adolescencia',
        'autismo-no-mercado-de-trabalho',
        'sintomas-do-autismo-na-infancia',
        'direitos-dos-autistas',
        'escalas-de-avaliacao'
    ];


    var nomesPais = [
        "Gustavo", "Juliana", "Maria", "Lucas", "Carlos", "Lúcia", "Mariana", "Rafael",
        "Pedro", "Natália", "Sophia", "Carolina", "Mateus", "Ana", "Daniel", "Gabriela",
        "Camila", "Fernanda", "João", "Isabela", "Letícia"
    ];

    var psicologos = [
        "Liam", "Noah", "Oliver", "Emma", "Ava", "Sophia"
    ];


    function teste() {
        alert('teste ok');
        console.log('teste ok');
    }

    function addMsgSend() {
        qdeMsg += 1;

        // Simula quantidade de usuários logados
        $("#qdeMsg").text(qdeMsg);
    }

    function addUserOnline(){
        qdeUsers = $('#usersonline').text() + 1;
        $('#usersonline').text(qdeUsers);
    }

    function addChatBallon() {
        // Adiciona mais um espaço para mensagem
        $('#chatConversation div:first').clone().appendTo("#chatConversation");
        $('#chatConversation div:last').addClass('chat-ballon');
        $('#chatConversation').scrollTop($('#chatConversation').prop('scrollHeight'));
    }

    function addMsgInChatBallon(mensagem, usuario) {
        mensagem = '<b>' + usuario + '</b>: <br /> ' + mensagem;
        $('#chatConversation div:last p').html(mensagem);
    }

    function sortNovoPaiOnline() {
        sortNomePais = Math.floor(Math.random() * nomesPais.length);
        pai = nomesPais[sortNomePais];
        return pai;
    }

    function sortNovoPsicologoOnline() {
        sortNomePsicologo = Math.floor(Math.random() * psicologos.length);
        nomePsicologo = psicologos[sortNomePsicologo];
        return nomePsicologo;
    }

    function sortPsicologoDialog(){
        sortMsgPsicologo = Math.floor(Math.random() * psicologoDialog.length);
        msgPsicologo = psicologoDialog[sortMsgPsicologo];
        return msgPsicologo;
    }
    
    function checkIfPaiIsOnline(pai) {
        if (usersOn.includes(nomesPais[sortNomePais])) {
            return true;
        } else {
            return false;
        }
    }

    function botDialog() {
        sortDialog = Math.floor(Math.random() * botDialog.length);
        return sortDialog;
    }

    function chatConversationAnimation() {

        addMsgSend();

        addChatBallon();

        // Sorteia um diálogo
        while (sortDialog == lastDialog) {
            sortDialog = Math.floor(Math.random() * maeDialog.length);
        }
        lastDialog = sortDialog;

        if (qdeMsg % 3) {
            // Sorteia um nome
            if (usersOn.length < maxOnToday) {
                pai = sortNovoPaiOnline();
                while (checkIfPaiIsOnline(pai)) {
                    pai = sortNovoPaiOnline();
                }
                usersOn.push(pai);
            } else {
                sortNomePais = Math.floor(Math.random() * usersOn.length);
                pai = usersOn[sortNomePais];
            }
            nome = pai;
            dialog = maeDialog[sortDialog];
        } else {
            // Sortea entre:
            // 1 = bot
            // 2 = Psicologo
            sorteado = Math.round(Math.random()) + 1;

            if (sorteado == 1) {
                nome = "ChatBot";
                pathUrl = window.location.href + '/' + botDialog;
                dialog = "Nossa plataforma possui um artigo bem interessante sobre isso: <br /> <a class='btn btn-primary' href='" + pathUrl + "'>Acesse aqui!</a>";
                $(".chat-ballon:last").addClass('chat-ballon-bot');
            } else {
                nome = "Psicologo " + sortNovoPsicologoOnline();
                dialog = sortPsicologoDialog();
                addUserOnline();
                $(".chat-ballon:last").addClass('chat-ballon-psicologo');
            }
        }

        // Atualiza quantidade de usuários online
        $("#usersonline").text(usersOn.length);

        addMsgInChatBallon(dialog, nome);
    }

    setInterval(() => {
        chatConversationAnimation();
    }, 3000);

    $('#btChatSend').on('click', function () {
        msg = $('#inputChatBot').val();
        if(nomeChat == ""){
            console.log('login');
            $('#loginBotChat').modal('show');
        } else {
            user = nomeChat;
            if (msg != "") {
                addMsgSend();
                addChatBallon();
                addMsgInChatBallon(msg, user);
                $('#inputChatBot').val("");
            }
        }
    });

    $('#btEntrarBot').on('click', function () {
        nomeChat = $('#nomeChat').val();
        user = nomeChat;
        msg = $('#inputChatBot').val();
        console.log(nomeChat);
        if (msg != "") {
            addMsgSend();
            addChatBallon();
            addMsgInChatBallon(msg, user);
            $('#inputChatBot').val("");
        }
        $('#loginBotChat').modal('hide');
    });
});