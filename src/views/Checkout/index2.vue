<template>
  <div class="flex flex-col items-center space-y-2 bg-gray-100">
    <div class="w-full sm:w-1/2 bg-white border border-gray-300 rounded p-4 mt-6">
      <div class="relative h-40">

        <div class="flex mb-4">
          <div class="w-1/6 h-40">
            <img class="w-36 h-40 rounded" src="../../assets/images/otimize-product.png" alt="logo">
          </div>
          <div class="w-5/6 pl-6 pt-12">
            <div class="text-base font-bold leading-normal">
              Nome do produto
            </div>
            <div class="text-xl font-semibold leading-normal text-brand-main">
              R$ 50,00 / mês
            </div>
            <div class="text-xs font-normal leading-normal">
              Plano mensal com renovação automática
            </div>
          </div>
        </div>

        <select class="absolute top-2 right-2 rounded-lg border border-gray-300 bg-white text-gray-900 text-sm p-2.5 focus:outline-none focus:border-brand-main focus:ring-1 focus:ring-brand-main">
          <option>Alterar país</option>
          <option>Opção 1</option>
          <option>Opção 2</option>
          <option>Opção 3</option>
        </select>
      </div>

    </div>

    <div class="w-full sm:w-1/2 bg-white border border-gray-300 rounded-lg">
      <form>
        <div class="grid gap-6 grid-cols-2 p-6">
          <div class="col-span-2 h-16">
            <div class="flex flex-col items-start self-stretch gap-2 h-16 ">
              <label for="name" class="text-md font-normal font-sans leading-5">Nome Completo</label>
              <input
                  id="name"
                  class="flex gap-2.5 self-stretch px-4 py-2 border border-gray-300 rounded focus:outline focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-sm text-gray-400"
                  placeholder="Digite seu nome completo"
              />
            </div>
          </div>
          <div class="col-span-2 h-16">
            <div class="flex flex-col items-start self-stretch gap-2 h-16 ">
              <label for="email" class="text-md font-normal font-sans leading-5">E-mail</label>
              <input
                  id="email"
                  class="flex gap-2.5 self-stretch px-4 py-2 border border-gray-300 rounded focus:outline focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-sm text-gray-400"
                  placeholder="Digite seu email"
              />
            </div>
          </div>
          <div class="col-span-2 md:col-span-1 h-16">
            <div class="flex flex-col items-start self-stretch gap-2 h-16 ">
              <label for="phone" class="text-md font-normal font-sans leading-5">Telefone</label>
              <input
                  id="phone"
                  class="flex gap-2.5 self-stretch px-4 py-2 border border-gray-300 rounded focus:outline focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-sm text-gray-400"
                  placeholder="(00) x0000-0000"
              />
            </div>
          </div>
          <div class="col-span-2 md:col-span-1 h-16">
            <div class="flex flex-col items-start self-stretch gap-2 h-16 ">
              <label for="zip-code" class="text-md font-normal font-sans leading-5">CEP</label>
              <input
                  id="zip-code"
                  class="flex gap-2.5 self-stretch px-4 py-2 border border-gray-300 rounded focus:outline focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-sm text-gray-400"
                  placeholder="Digite seu CEP"
              />
            </div>
          </div>
          <div class="col-span-2 h-16">
            <div class="flex flex-col items-start self-stretch gap-2 h-16 ">
              <label for="address" class="text-md font-normal font-sans leading-5">Endereço</label>
              <input
                  id="address"
                  class="flex gap-2.5 self-stretch px-4 py-2 border border-gray-300 rounded focus:outline focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-sm text-gray-400"
                  placeholder="Digite seu endereço"
              />
            </div>
          </div>
          <div class="col-span-2 md:col-span-1 h-16">
            <div class="flex flex-col items-start self-stretch gap-2 h-16 ">
              <label for="number" class="text-md font-normal font-sans leading-5">Número</label>
              <input
                  id="number"
                  class="flex gap-2.5 self-stretch px-4 py-2 border border-gray-300 rounded focus:outline focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-sm text-gray-400"
                  placeholder="Número"
              />
            </div>
          </div>
          <div class="col-span-2 md:col-span-1 h-16">
            <div class="flex flex-col items-start self-stretch gap-2 h-16 ">
              <label for="complement" class="text-md font-normal font-sans leading-5">Complemento</label>
              <input
                  id="complement"
                  class="flex gap-2.5 self-stretch px-4 py-2 border border-gray-300 rounded focus:outline focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-sm text-gray-400"
                  placeholder="Digite seu complemento"
              />
            </div>
          </div>
          <div class="col-span-2 h-16">
            <div class="flex flex-col items-start self-stretch gap-2 h-16 ">
              <label for="neighborhood" class="text-md font-normal font-sans leading-5">Bairro</label>
              <input
                  id="neighborhood"
                  class="flex gap-2.5 self-stretch px-4 py-2 border border-gray-300 rounded focus:outline focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-sm text-gray-400"
                  placeholder="Digite seu bairro"
              />
            </div>
          </div>
          <div class="col-span-2 md:col-span-1 h-16">
            <div class="flex flex-col items-start self-stretch gap-2 h-16 ">
              <label for="city" class="text-md font-normal font-sans leading-5">Cidade</label>
              <input
                  id="city"
                  class="flex gap-2.5 self-stretch px-4 py-2 border border-gray-300 rounded focus:outline focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-sm text-gray-400"
                  placeholder="Digite sua cidade"
              />
            </div>
          </div>
          <div class="col-span-2 md:col-span-1 h-16">
            <div class="flex flex-col items-start self-stretch gap-2 h-16 ">
              <label for="state" class="text-md font-normal font-sans leading-5">Estado</label>
              <input
                  id="state"
                  class="flex gap-2.5 self-stretch px-4 py-2 border border-gray-300 rounded focus:outline focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-sm text-gray-400"
              />
            </div>
          </div>
        </div>

      </form>
    </div>

    <div class="w-full sm:w-1/2 bg-white border border-gray-300 rounded-lg ">
      <div class="flex justify-center gap-6 mt-6">
        <div class="w-36 h-16 flex p-2 justify-center align-center bg-white border border-gray-300 rounded-lg">
          <div class="flex flex-col p-2 items-start text-gray-100">
            <svg xmlns="http://www.w3.org/2000/svg" width="47" height="34" viewBox="0 0 47 34" fill="none">
              <path d="M45.1667 12.8333H1.83337M21.3334 21.5H10.5M1.83337 8.93333L1.83337 25.4C1.83337 27.8269 1.83337 29.0403 2.30568 29.9673C2.72113 30.7827 3.38405 31.4456 4.19941 31.861C5.12637 32.3333 6.33981 32.3333 8.76671 32.3333L38.2334 32.3333C40.6603 32.3333 41.8737 32.3333 42.8007 31.861C43.616 31.4456 44.279 30.7827 44.6944 29.9673C45.1667 29.0403 45.1667 27.8269 45.1667 25.4V8.93334C45.1667 6.50644 45.1667 5.293 44.6944 4.36604C44.279 3.55068 43.616 2.88776 42.8007 2.47231C41.8737 2 40.6603 2 38.2334 2L8.76671 2C6.33981 2 5.12637 2 4.19942 2.4723C3.38405 2.88776 2.72113 3.55067 2.30568 4.36604C1.83337 5.29299 1.83337 6.50644 1.83337 8.93333Z" stroke="#8E939A" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <div class="text-xs font-medium text-gray-500 self-center">
            Cartão de
            crédito
          </div>
        </div>
        <div class="w-36 h-16 flex p-2 justify-center align-center bg-white border border-gray-300 rounded-lg">
          <div class="flex flex-col p-2 items-start text-gray-100">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="38" viewBox="0 0 40 38" fill="none">
              <path d="M30.9523 28.7955C30.2091 28.798 29.4728 28.6617 28.7858 28.3943C28.0988 28.1269 27.4749 27.7337 26.9499 27.2376L21.1687 21.7819C20.9642 21.5975 20.6922 21.4946 20.4092 21.4946C20.1263 21.4946 19.8543 21.5975 19.6498 21.7819L13.849 27.2525C13.3244 27.7494 12.7006 28.1433 12.0136 28.4115C11.3267 28.6797 10.5901 28.8169 9.84665 28.8151H8.71481L16.0406 35.7238C17.1393 36.7578 18.6281 37.3385 20.1803 37.3385C21.7325 37.3385 23.2213 36.7578 24.32 35.7238L31.6604 28.8001L30.9523 28.7955Z" fill="#8E939A"/>
              <path d="M9.84787 9.51541C10.5914 9.51354 11.3279 9.65067 12.0149 9.91886C12.7019 10.1871 13.3256 10.581 13.8502 11.0779L19.651 16.5497C19.8526 16.7393 20.1257 16.8457 20.4104 16.8457C20.6952 16.8457 20.9683 16.7393 21.1699 16.5497L26.9499 11.0987C27.4741 10.6011 28.0978 10.2067 28.7848 9.93826C29.4719 9.66983 30.2086 9.53276 30.9523 9.53499H31.6482L24.3078 2.6124C23.7642 2.09959 23.1189 1.6928 22.4086 1.41526C21.6983 1.13772 20.9369 0.994873 20.1681 0.994873C19.3992 0.994873 18.6379 1.13772 17.9276 1.41526C17.2173 1.6928 16.572 2.09959 16.0284 2.6124L8.71481 9.51541H9.84787Z" fill="#8E939A"/>
              <path d="M37.7202 15.2624L33.2844 11.0791C33.1843 11.1177 33.0775 11.138 32.9694 11.139H30.9523C29.9027 11.1414 28.8966 11.5346 28.1527 12.2329L22.3726 17.6804C21.8521 18.1704 21.1466 18.4457 20.4111 18.4457C19.6756 18.4457 18.9702 18.1704 18.4496 17.6804L12.6476 12.2121C11.9039 11.5134 10.8977 11.1199 9.84794 11.1171H7.37182C7.26977 11.1149 7.16893 11.0958 7.07391 11.0607L2.61005 15.2624C1.51367 16.2985 0.897919 17.7026 0.897919 19.1664C0.897919 20.6302 1.51367 22.0342 2.61005 23.0704L7.06414 27.2709C7.15896 27.2351 7.25993 27.216 7.36205 27.2145H9.84794C10.8977 27.2116 11.9038 26.8181 12.6476 26.1195L18.4484 20.6489C19.4972 19.6609 21.325 19.6609 22.3726 20.6489L28.1527 26.0988C28.8966 26.797 29.9027 27.1902 30.9523 27.1926H32.9694C33.0775 27.1934 33.1844 27.2137 33.2844 27.2525L37.7202 23.0693C38.2639 22.5566 38.6953 21.948 38.9896 21.2782C39.2839 20.6083 39.4353 19.8903 39.4353 19.1652C39.4353 18.4401 39.2839 17.7222 38.9896 17.0523C38.6953 16.3824 38.2639 15.7738 37.7202 15.2612" fill="#8E939A"/>
            </svg>
          </div>
          <div class="text-xs font-medium text-gray-500 self-center">
            Pix
          </div>
        </div>
        <div class="w-36 h-16 flex p-2 justify-center align-center bg-white border border-gray-300 rounded-lg">
          <div class="flex flex-col p-2 items-start text-gray-100">
            <svg xmlns="http://www.w3.org/2000/svg" width="46" height="31" viewBox="0 0 46 31" fill="none">
              <path d="M0.166626 0H1.4532V30.3333H0.166626V0ZM2.73977 0H4.02635V30.3333H2.73977V0ZM10.4647 0H11.7512V30.3333H10.4647V0ZM35.5078 0H36.7943V30.3333H35.5078V0ZM43.8801 0H45.1666V30.3333H43.8801V0ZM18.9599 0H20.2465V30.3333H18.9599V0ZM6.08595 0H8.40233V30.3333H6.08595V0ZM21.3746 0H23.691V30.3333H21.3746V0ZM32.1097 0H34.4261V30.3333H32.1097V0ZM37.6056 0H39.922V30.3333H37.6056V0ZM13.0378 0H17.6706V30.3333H13.0378V0ZM25.0458 0H28.6488V30.3333H25.0458V0Z" fill="#8E939A"/>
            </svg>
          </div>
          <div class="text-xs font-medium text-gray-500 self-center">
            Boleto
          </div>
        </div>
      </div>
      <div class="p-6 grid grid-cols-2">
        <div class="grid grid-cols-3 space-y-6">
          <div class="col-span-3">
            <div class="flex flex-col items-start self-stretch gap-2 h-16 ">
              <label for="card-number" class="text-md font-normal font-sans leading-5">Número do cartão</label>
              <input
                  id="card-number"
                  class="flex gap-2.5 self-stretch px-4 py-2 border border-gray-300 rounded focus:outline focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-sm text-gray-400"
                  placeholder="Digite somente os números"
              />
            </div>
          </div>
          <div class="col-span-3">
            <div class="flex flex-col items-start self-stretch gap-2 h-16 ">
              <label for="card-name" class="text-md font-normal font-sans leading-5">Titular do Cartão</label>
              <input
                  id="card-name"
                  class="flex gap-2.5 self-stretch px-4 py-2 border border-gray-300 rounded focus:outline focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-sm text-gray-400"
                  placeholder="Digite o nome impresso no cartão"
              />
            </div>
          </div>
          <div class="col-span-3">
            <div class="flex flex-col items-start self-stretch gap-2 h-16 ">
              <label for="document-number" class="text-md font-normal font-sans leading-5">CPF/CNPJ do Titular</label>
              <input
                  id="document-number"
                  class="flex gap-2.5 self-stretch px-4 py-2 border border-gray-300 rounded focus:outline focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-sm text-gray-400"
                  placeholder="Para emissão da nota fiscal"
              />
            </div>
          </div>
          <div class="col-span-1">
            <div class="flex flex-col items-start self-stretch gap-2 h-16 ">
              <label for="validate-month" class="text-md font-normal font-sans leading-5">Validade</label>
              <input
                  id="validate-month"
                  class="flex gap-2.5 self-stretch px-4 py-2 border border-gray-300 rounded focus:outline focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-sm text-gray-400"
                  placeholder="Mês"
              />
            </div>
          </div>
          <div class="col-span-1">
            <div class="flex flex-col items-start self-stretch gap-2 h-16 ">
              <label for="validate-month" class="text-md font-normal font-sans leading-5">Validade</label>
              <input
                  id="validate-month"
                  class="flex gap-2.5 self-stretch px-4 py-2 border border-gray-300 rounded focus:outline focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-sm text-gray-400"
                  placeholder="Mês"
              />
            </div>
          </div>
        </div>
      </div>

<!--      <div>-->
<!--        Detalhes da compra-->
<!--      </div>-->

<!--      <div>-->
<!--        Comprar agora-->
<!--      </div>-->
    </div>
  </div>

</template>

<script>

export default {
  name: 'CheckoutPage',
  data() {
    return {

    }
  },
  methods: {
  }
}
</script>
