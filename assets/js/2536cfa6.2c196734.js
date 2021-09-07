"use strict";(self.webpackChunkplaybook_website=self.webpackChunkplaybook_website||[]).push([[906],{3905:function(e,a,t){t.d(a,{Zo:function(){return c},kt:function(){return u}});var o=t(7294);function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function s(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);a&&(o=o.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,o)}return t}function n(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?s(Object(t),!0).forEach((function(a){i(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function r(e,a){if(null==e)return{};var t,o,i=function(e,a){if(null==e)return{};var t,o,i={},s=Object.keys(e);for(o=0;o<s.length;o++)t=s[o],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)t=s[o],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=o.createContext({}),d=function(e){var a=o.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):n(n({},a),e)),t},c=function(e){var a=d(e.components);return o.createElement(l.Provider,{value:a},e.children)},m={inlineCode:"code",wrapper:function(e){var a=e.children;return o.createElement(o.Fragment,{},a)}},p=o.forwardRef((function(e,a){var t=e.components,i=e.mdxType,s=e.originalType,l=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),p=d(t),u=i,k=p["".concat(l,".").concat(u)]||p[u]||m[u]||s;return t?o.createElement(k,n(n({ref:a},c),{},{components:t})):o.createElement(k,n({ref:a},c))}));function u(e,a){var t=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var s=t.length,n=new Array(s);n[0]=p;var r={};for(var l in a)hasOwnProperty.call(a,l)&&(r[l]=a[l]);r.originalType=e,r.mdxType="string"==typeof e?e:i,n[1]=r;for(var d=2;d<s;d++)n[d]=t[d];return o.createElement.apply(null,n)}return o.createElement.apply(null,t)}p.displayName="MDXCreateElement"},9061:function(e,a,t){t.r(a),t.d(a,{frontMatter:function(){return r},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return c},default:function(){return p}});var o=t(7462),i=t(3366),s=(t(7294),t(3905)),n=["components"],r={sidebar_position:2},l="Ciclo de Desenvolvimento",d={unversionedId:"guide-best-practices/lifecycle",id:"guide-best-practices/lifecycle",isDocsHomePage:!1,title:"Ciclo de Desenvolvimento",description:"Com o advento do sequenciamento gen\xe9tico de nova gera\xe7\xe3o na aplica\xe7\xe3o cl\xednica, os pipelines de bioinform\xe1tica para detec\xe7\xe3o e anota\xe7\xe3o de variantes est\xe3o se tornando mais populares. Todavia, o processo de traduzir os requisitos dos analistas de biologia molecular, geneticistas e especialistas cl\xednicos se tornam uma tarefa laboriosa, acrescentando isto ao processo de desenvolver, testar e lan\xe7ar de forma cont\xednua, ap\xf3s melhorias, os pipelines cl\xednicos.",source:"@site/docs/guide-best-practices/lifecycle.md",sourceDirName:"guide-best-practices",slug:"/guide-best-practices/lifecycle",permalink:"/bioinfo-playbook/docs/guide-best-practices/lifecycle",editUrl:"https://github.com/varstation/bioinfo-playbook/edit/master/website/docs/guide-best-practices/lifecycle.md",version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Introdu\xe7\xe3o",permalink:"/bioinfo-playbook/docs/guide-best-practices/introduction-guidelines"},next:{title:"Planejamento, Design e Requisitos",permalink:"/bioinfo-playbook/docs/guide-best-practices/requirements"}},c=[{value:"Nosso Processo de Desenvolvimento de Pipelines de Bioinform\xe1tica",id:"nosso-processo-de-desenvolvimento-de-pipelines-de-bioinform\xe1tica",children:[]},{value:"Checklist para Desenvolvimento de Pipeline",id:"checklist-para-desenvolvimento-de-pipeline",children:[{value:"1.Design e Requisitos",id:"1design-e-requisitos",children:[]},{value:"2. Implementa\xe7\xe3o",id:"2-implementa\xe7\xe3o",children:[]},{value:"3. Monitoramento e Testes em Homologa\xe7\xe3o",id:"3-monitoramento-e-testes-em-homologa\xe7\xe3o",children:[]},{value:"5. Valida\xe7\xe3o",id:"5-valida\xe7\xe3o",children:[]},{value:"6. Deploy no Varstation",id:"6-deploy-no-varstation",children:[]},{value:"7. Documenta\xe7\xe3o de Valida\xe7\xe3o",id:"7-documenta\xe7\xe3o-de-valida\xe7\xe3o",children:[]},{value:"8. Refer\xeancias",id:"8-refer\xeancias",children:[]}]},{value:"Pr\xf3ximos passos",id:"pr\xf3ximos-passos",children:[]}],m={toc:c};function p(e){var a=e.components,r=(0,i.Z)(e,n);return(0,s.kt)("wrapper",(0,o.Z)({},m,r,{components:a,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"ciclo-de-desenvolvimento"},"Ciclo de Desenvolvimento"),(0,s.kt)("p",null,"Com o advento do sequenciamento gen\xe9tico de nova gera\xe7\xe3o na aplica\xe7\xe3o cl\xednica, os pipelines de bioinform\xe1tica para detec\xe7\xe3o e anota\xe7\xe3o de variantes est\xe3o se tornando mais populares. Todavia, o processo de traduzir os requisitos dos analistas de biologia molecular, geneticistas e especialistas cl\xednicos se tornam uma tarefa laboriosa, acrescentando isto ao processo de desenvolver, testar e lan\xe7ar de forma cont\xednua, ap\xf3s melhorias, os pipelines cl\xednicos. "),(0,s.kt)("p",null,"Comparados aos softwares tradicionais, os pipelines de bioinform\xe1tica lidam com dados, par\xe2metros e o c\xf3digo em si, e estem exigem acompanhamento cont\xednuo \xe0 medida que novas vers\xf5es de software de bioinform\xe1tica surgem ou a necessidade de uma nova base de dados anotada ou at\xe9 um tipo novo de variante a ser detectado e anotado. No nosso cen\xe1rio em que trabalhamos com genoma humano, estamos ainda aprimorando o conhecimento sobre o mesmo, tanto que h\xe1 vers\xf5es lan\xe7adas continuamente, e estes exigem novos ajustes dos pipelines de bioinform\xe1tica em produ\xe7\xe3o ou at\xe9 a constru\xe7\xe3o do zero do mesmo , tornando o anterior obsoleto.  Isto significa que no nosso cen\xe1rio de bioinform\xe1tica e pipelines, estes precisam estar continuamente sendo monitorados e avaliados a cada nova vers\xe3o do genoma ou novos dados / banco de dados dispon\xedveis."),(0,s.kt)("h2",{id:"nosso-processo-de-desenvolvimento-de-pipelines-de-bioinform\xe1tica"},"Nosso Processo de Desenvolvimento de Pipelines de Bioinform\xe1tica"),(0,s.kt)("p",null,"O desenvolvimento de pipelines de bioinform\xe1tica passa por 5 macro-etapas desde sua concep\xe7\xe3o at\xe9 a sua libera\xe7\xe3o em ambiente produtivo (go-live). Na figura abaixo ilustramos de forma resumida cada etapa e em seguida detalhamos mais sobre cada uma delas."),(0,s.kt)("p",null,(0,s.kt)("img",{src:t(4495).Z}),"\nFigura 4: Ciclo de Desenvolvimento do Pipeline de Bioinform\xe1tica"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"Etapa de Planejamento e Design")," Nesta etapa tem como objetivo reunir o m\xe1ximo de informa\xe7\xf5es poss\xedveis sobre o problema biol\xf3gico que quer se resolver. Esta etapa  geralmente est\xe1 ligada a um poss\xedvel novo exame a ser lan\xe7ado pelo laborat\xf3rio ou um projeto de pesquisa e desenvolvimento para complementar os resultados de um exame de outro setor. Desta forma, s\xe3o feitas v\xe1rias entrevistas e pesquisas com os biol\xf3gos, m\xe9dicos, geneticistas e analistas para que possa entender os componentes de bioinform\xe1tica a serem utilizados para o processamento de dados e o alinhamento dos arquivos de entrada e sa\xedda esperados no pipeline. Ao mesmo tempo, durante esta etapa, os membros da equipe fazem anota\xe7\xf5es no Bioinformatics Pipeline Canvas (BPC).")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"Constru\xe7\xe3o")," Nesta etapa inicia-se a constru\xe7\xe3o do pipeline de bioinform\xe1tica considerando todas as etapas a serem processadas em ordem. Geralmente estas etapas envolvem diferentes softwares de v\xe1rias fontes executadas em linha de comando. Os bioinformatas automatizam todas etapas por meio da linguagem de descri\xe7\xe3o de workflows (WDL) que s\xe3o orquestradas por meio do Cromwell, ferramenta da Broad Institute adotada pelo nosso grupo para ser o orquestrador de execu\xe7\xe3o de nossos pipelines.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"Teste e Otimiza\xe7\xe3o"),"  Com as primeiras vers\xf5es do pipeline funcionais, esta etapa serve para a realiza\xe7\xe3o de testes com exemplos de data reais e artificiais com valida\xe7\xf5es de resultados com os usu\xe1rios finais (clientes) e otimiza\xe7\xf5es para atender o volume de dados esperado.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"Valida\xe7\xe3o"),"  Esta etapa foca em validar o pipeline de bioinform\xe1tica perante benchmark de amostras com resultados pr\xe9vios, coletando m\xe9tricas de precis\xe3o, acur\xe1cia, sensibilidade para verificar as limita\xe7\xf5es de detec\xe7\xe3o de chamada de variantes e qualidade do pipeline para os tipos de dados a serem imputados de rotinas de sequenciamento reais. Aqui, \xe9 um ponto de decis\xe3o para verifica\xe7\xe3o perante bioinformatas e analistas se o pipeline est\xe1 preparado para seguir para ser lan\xe7ado em ambiente produtivo.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"Lan\xe7amento e Deploy")," Por \xfaltimo, aqui todo o c\xf3digo-fonte, arquivos de configura\xe7\xe3o e demais dados auxiliares s\xe3o empacotados e versionados para o processo de lan\xe7amento e deploy. Gera-se releases candidatas que s\xe3o testadas em ambiente de homologa\xe7\xe3o similar ao ambiente produtivo e uma vez que o build tenha \xeaxito, o mesmo \xe9 liberado para o ambiente produtivo."))),(0,s.kt)("h2",{id:"checklist-para-desenvolvimento-de-pipeline"},"Checklist para Desenvolvimento de Pipeline"),(0,s.kt)("p",null,"Nesta se\xe7\xe3o e nas pr\xf3ximas a seguir, iremos apresentar como voc\xea poder\xe1 desenvolver seu primeiro pipeline de bioinform\xe1tica em WDL ou editar um j\xe1 existente. Agora que voc\xea est\xe1 familiar com nosso ciclo de desenvolvimento de um pipeline, iremos detalhar o nosso checklist de desenvolvimento. Este \xe9 um guia apenas para refer\xeancia, onde pode ser modificado de acordo com as necessidades e particularidades de cada pipeline a ser desenvolvido ou alterado. Fique \xe0 vontade para ajustar e trazer novas melhorias, este \xe9 um trabalho derivado de observa\xe7\xf5es cont\xednuas de alguns anos desenvolvendo e lan\xe7ando pipelines em nossa plataforma Varstation."),(0,s.kt)("h3",{id:"1design-e-requisitos"},"1.Design e Requisitos"),(0,s.kt)("ul",{className:"contains-task-list"},(0,s.kt)("li",{parentName:"ul",className:"task-list-item"},(0,s.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Voc\xea j\xe1 realizou o Pipeline Canvas ?  (Leia mais aqui sobre o Pipeline Canvas)"),(0,s.kt)("li",{parentName:"ul",className:"task-list-item"},(0,s.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Voc\xea j\xe1 definiu os requisitos do problema biol\xf3gico a resolver ? (esp\xe9cie, genomas, etc.)"),(0,s.kt)("li",{parentName:"ul",className:"task-list-item"},(0,s.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","J\xe1 definiu as entradas e sa\xeddas esperadas em alto n\xedvel ?"),(0,s.kt)("li",{parentName:"ul",className:"task-list-item"},(0,s.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","H\xe1 papers e materiais auxiliares para defini\xe7\xe3o das ferramentas a utilizar ?"),(0,s.kt)("li",{parentName:"ul",className:"task-list-item"},(0,s.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","H\xe1 amostras pr\xe9vias ou resultados pr\xe9vios para compara\xe7\xe3o ?"),(0,s.kt)("li",{parentName:"ul",className:"task-list-item"},(0,s.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Quais tipos de variantes que voc\xea precisa detectar ? (SNVs, SVs, CNVs, quantifica\xe7\xf5es, etc.)")),(0,s.kt)("h3",{id:"2-implementa\xe7\xe3o"},"2. Implementa\xe7\xe3o"),(0,s.kt)("ul",{className:"contains-task-list"},(0,s.kt)("li",{parentName:"ul",className:"task-list-item"},(0,s.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","H\xe1 um pipeline pr\xe9vio que atenda j\xe1 os requisitos ?"),(0,s.kt)("li",{parentName:"ul",className:"task-list-item"},(0,s.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Se pipeline pr\xe9vio, clonar o pipeline anterior com ajustes em par\xe2metros e arquivos auxiliares."),(0,s.kt)("li",{parentName:"ul",className:"task-list-item"},(0,s.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Se pipeline novo, criar um reposit\xf3rio novo seguindo o template da bioinformatica."),(0,s.kt)("li",{parentName:"ul",className:"task-list-item"},(0,s.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Setup do desenvolvimento de Git e GitFlow"),(0,s.kt)("li",{parentName:"ul",className:"task-list-item"},(0,s.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Setup do desenvolvimento de Docker e WDL local"),(0,s.kt)("li",{parentName:"ul",className:"task-list-item"},(0,s.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Setup do desenvolvimento do Ambiente Remoto"),(0,s.kt)("li",{parentName:"ul",className:"task-list-item"},(0,s.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Definir Sprint Backlog e Cronograma alinhado com Product Owner e Scrum Master"),(0,s.kt)("li",{parentName:"ul",className:"task-list-item"},(0,s.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Defini\xe7\xe3o de fluxo de Pull Request e Aprova\xe7\xe3o")),(0,s.kt)("h3",{id:"3-monitoramento-e-testes-em-homologa\xe7\xe3o"},"3. Monitoramento e Testes em Homologa\xe7\xe3o"),(0,s.kt)("ul",{className:"contains-task-list"},(0,s.kt)("li",{parentName:"ul",className:"task-list-item"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("input",{parentName:"p",type:"checkbox",checked:!1,disabled:!0})," ","Execu\xe7\xe3o de set de amostras em homologa\xe7\xe3o e valida\xe7\xe3o de outputs de sa\xedda")),(0,s.kt)("li",{parentName:"ul",className:"task-list-item"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("input",{parentName:"p",type:"checkbox",checked:!1,disabled:!0})," ","Valida\xe7\xe3o de desempenho com uma rotina de amostras (recomendado n > 5)")),(0,s.kt)("li",{parentName:"ul",className:"task-list-item"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("input",{parentName:"p",type:"checkbox",checked:!1,disabled:!0})," ","Ajustes e otimiza\xe7\xf5es para lan\xe7amento"),(0,s.kt)("h3",{parentName:"li",id:"4-documenta\xe7\xe3o-t\xe9cnica"},"4. Documenta\xe7\xe3o T\xe9cnica")),(0,s.kt)("li",{parentName:"ul",className:"task-list-item"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("input",{parentName:"p",type:"checkbox",checked:!1,disabled:!0})," ","Constru\xe7\xe3o da Documenta\xe7\xe3o T\xe9cnica sobre o fluxo do pipeline e versionamento dos softwares de bioinform\xe1tica")),(0,s.kt)("li",{parentName:"ul",className:"task-list-item"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("input",{parentName:"p",type:"checkbox",checked:!1,disabled:!0})," ","Constru\xe7\xe3o do POP de bioinform\xe1tica sobre execu\xe7\xe3o do Pipeline"))),(0,s.kt)("h3",{id:"5-valida\xe7\xe3o"},"5. Valida\xe7\xe3o"),(0,s.kt)("ul",{className:"contains-task-list"},(0,s.kt)("li",{parentName:"ul",className:"task-list-item"},(0,s.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Valida\xe7\xe3o contra set de amostras benchmark bioinform\xe1tica (NA12878 gold standard, entre outras)"),(0,s.kt)("li",{parentName:"ul",className:"task-list-item"},(0,s.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Valida\xe7\xe3o contra set de amostras pr\xe9vias laboratoriais caso haja mudan\xe7a de kits de sequenciamento"),(0,s.kt)("li",{parentName:"ul",className:"task-list-item"},(0,s.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Apresenta\xe7\xe3o de Resultados das planilhas de controle aos interessados para confirma\xe7\xe3o de valida\xe7\xe3o")),(0,s.kt)("h3",{id:"6-deploy-no-varstation"},"6. Deploy no Varstation"),(0,s.kt)("ul",{className:"contains-task-list"},(0,s.kt)("li",{parentName:"ul",className:"task-list-item"},(0,s.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Congelamento do release candidate do pipeline de bioinform\xe1tica"),(0,s.kt)("li",{parentName:"ul",className:"task-list-item"},(0,s.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Cria\xe7\xe3o do deployment release zip para deploy no varstation"),(0,s.kt)("li",{parentName:"ul",className:"task-list-item"},(0,s.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Cria\xe7\xe3o da tag no github (versionamento sem\xe2ntico)"),(0,s.kt)("li",{parentName:"ul",className:"task-list-item"},(0,s.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Build do Release Candidate no Varstation Producao"),(0,s.kt)("li",{parentName:"ul",className:"task-list-item"},(0,s.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Comit\xea de GM para defini\xe7\xe3o da data de lan\xe7amento"),(0,s.kt)("li",{parentName:"ul",className:"task-list-item"},(0,s.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Deploy da Release para ambiente produtivo"),(0,s.kt)("li",{parentName:"ul",className:"task-list-item"},(0,s.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Testes no ambiente de valida\xe7\xe3o produtivo com 1 amostra de benchmark de bioinform\xe1tica")),(0,s.kt)("h3",{id:"7-documenta\xe7\xe3o-de-valida\xe7\xe3o"},"7. Documenta\xe7\xe3o de Valida\xe7\xe3o"),(0,s.kt)("ul",{className:"contains-task-list"},(0,s.kt)("li",{parentName:"ul",className:"task-list-item"},(0,s.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Conclus\xe3o da Documenta\xe7\xe3o de Valida\xe7\xe3o Bioinform\xe1tica"),(0,s.kt)("li",{parentName:"ul",className:"task-list-item"},(0,s.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Assinatura e de acordo dos Gerentes de Bioinform\xe1tica e NGS"),(0,s.kt)("li",{parentName:"ul",className:"task-list-item"},(0,s.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Armazenamento do documento versionado no drive da institui\xe7\xe3o")),(0,s.kt)("h3",{id:"8-refer\xeancias"},"8. Refer\xeancias"),(0,s.kt)("ul",{className:"contains-task-list"},(0,s.kt)("li",{parentName:"ul",className:"task-list-item"},(0,s.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Registro no github e documenta\xe7\xe3o oficial do varstation do pipeline liberado.")),(0,s.kt)("h2",{id:"pr\xf3ximos-passos"},"Pr\xf3ximos passos"),(0,s.kt)("p",null,"Vamos iniciar nossa jornada com exemplos , come\xe7ando com a etapa de design e requisitos. Apertem os cintos, nossa jornada est\xe1 prestes a come\xe7ar!"))}p.isMDXComponent=!0},4495:function(e,a,t){a.Z=t.p+"assets/images/lifecycle_bioinformatics-6c1a72d2ca8e6d974b1ff1a28ab8427a.png"}}]);