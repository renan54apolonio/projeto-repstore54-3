from selenium import webdriver
from selenium.webdriver.chrome.service import Service as ChromeService
from selenium.webdriver.chrome.options import Options

import time

def obter_preco(link):
    driver = None  # Inicializa a variável driver fora do bloco try
    try:
        options = Options()
        options.headless = True
        service = ChromeService(executable_path=r"C:\Users\renan\Downloads\chromedriver_win32\chromedriver.exe")

        # Inicia o navegador Chrome
        driver = webdriver.Chrome(service=service, options=options)

        # Carrega a página
        driver.get(link)

        # Aguarda alguns segundos para permitir que a página carregue completamente
        time.sleep(5)

        # Encontra a tag que contém o preço com a classe 'a-price-whole'
        preco_tag = driver.find_element("css selector", 'span.a-price-whole')

        # Se a tag for encontrada, obtém o texto da tag
        parte_inteira = preco_tag.text.strip() if preco_tag else ''

        # Converte o valor para um formato numérico
        valor_numerico = int(parte_inteira.replace('.', ''))

        # Formata o valor de volta para uma string com duas casas decimais
        preco_formatado = f"R${valor_numerico / 100:.2f}" if parte_inteira else 'Preço não encontrado'

        return preco_formatado

    except Exception as e:
        return f"Erro ao obter página: {e}"

    finally:
        # Fecha o navegador após a execução
        if driver:
            driver.quit()

# Restante do código permanece inalterado

# Lista de links de produtos
lista_links = [
    'https://www.amazon.com.br/Controle-Remoto-Alexa-inclui-comandos-TV/dp/B08D2L81JW/ref=p13n_ds_purchase_sim_1p_dp_desktop_d_sccl_1_4/133-4007951-1328352?pd_rd_w=dDrms&content-id=amzn1.sym.d30d9556-2dc7-421f-aa97-545f24d55298&pf_rd_p=d30d9556-2dc7-421f-aa97-545f24d55298&pf_rd_r=HYK1PAXNJ2XS7S5XBV78&pd_rd_wg=meIKw&pd_rd_r=1309be8b-5d27-463c-ad5b-10ddd225b5f7&pd_rd_i=B08D2L81JW&psc=1',
    # Adicione mais links conforme necessário
]

# Loop principal para atualizar os preços a cada 20 minutos
while True:
    # Lista para armazenar a relação produto-preço
    relacao_produto_preco = []

    # Itera sobre a lista de links e adiciona à lista a relação produto-preço
    for i, link in enumerate(lista_links, start=1):
        preco = obter_preco(link)
        relacao_produto_preco.append(f"Produto {i}: {preco}")

    # Exibe a lista final
    for item in relacao_produto_preco:
        print(item)

    # Aguarda 20 minutos antes de realizar a próxima atualização
    time.sleep(1200)  # 20 minutos = 1200 segundos