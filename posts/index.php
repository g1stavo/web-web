<!DOCTYPE html>
<html>
    <head>
        <title>Refer&eacute;ncia de Webservice</title>
    </head>
    <body>
        <h1>Refer&eacute;ncia para o Webservice</h1>
        <h2>Método POST:</h2>
        <p>Deve ser utilizado para o envio de artigos.</p>
        <ul>
            <li>URL: http://www.ketolow.rf.gd/post.php</li>
            <li>Parâmetros aceitos:
                <ul>
                    <li><strong>titulo</strong>: String com o nome da postagem. (Obrigatório)</li>
                    <li><strong>texto</strong>: String com o corpo da postagem. (Obrigatório)</li>
                    <li><strong>imagem</strong>: Arquivo de imagem para foto da postagem; Máx 1mb em formato válido para imagem web. (Opcional)</li>
                </ul>
            </li>
            <li>Retorno:
                <ul>
                    <li><strong>status</strong>: String contendo "error" ou "success".</li>
                    <li><strong>msg</strong>: String contendo motivo do erro (apenas em casa de erro).</li>
                </ul>
            </li>
        </ul>
        <h2>Método GET:</h2>
        <p>Deve ser utilizado para a visualização de artigos.</p>
        <ul>
            <li>URL: http://www.ketolow.rf.gd/get.php</li>
            <li>Se executado sem parâmetros, retorna todos artigos.</li>
            <li>Parâmetros aceitos (exclusivos, em ordem de prioridade):
                <ul>
                    <li><strong>id</strong>: Busca um único artigo, por id (int).</li>
                    <li><strong>titulo</strong>: Busca artigos por strings contidas no titulo.</li>
                    <li><strong>texto</strong>: Busca artigos por strings contidas no texto.</li>
                    <li><strong>novos</strong>: Busca os N (int) artigos mais recentes.</li>
                </ul>
            </li>
            <li>Retornada uma array em que cada objeto possui os seguintes valores:
                <ul>
                    <li><strong>id</strong>: Uma int com o ID único do artigo.</li>
                    <li><strong>título</strong>: String com o nome do artigo.</li>
                    <li><strong>descricao</strong>: String com o corpo do artigo.</li>
                    <li><strong>foto</strong>: Null caso não possua imagem, string com o nome do arquivo caso contrário. A imagem pode ser acessada concatenando o nome do arquivo ao url: http://www.ketolow.rf.gd/imagens/</li>
                    <li><strong>datahora</strong>: String com a timestamp da postagem, em formato YYYY-MM-DD hh:mm:ss</li>
                </ul>
            </li>
        </ul>
    </body>
</html>