describe('Main', function () {

    var arr;
    //Roda uma vez antes do teste
    before(function () {
        //iniciar uma conexão com o banco de dados.
        //criar um conjunto de dados
    });

    //Roda uma vez depois do teste
    after(function () {
        //fecha conexão com o banco de dados.
        //apaga um conjunto de dados.
    });

    //Roda todas as vezes, antes de CADA bloco
    beforeEach(function () {
        arr = [1,2,3]
    });

    //Roda todas as vezes, depois de CADAS bloco
    afterEach(function () {

    });

    it('deve ter o tamanho de 4 quando adicionar um valor no array', function () {
        arr.push(4);
        console.log(arr.length) //4 
    });

    it('deve ter o tamanho de 2 quando excluir um valor do array', function () {
        arr.pop();
        console.log(arr.length) //2
    });

    it('deve ter o valor 3 quando usar o pop no array', function () {
        console.log(arr.pop() === 3) //true
    });
})