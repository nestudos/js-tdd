describe('Main', function(){
    describe('Método A', function(){
        context('Caso 1', function(){
            it('deve acontecer alguma coisa', function(){
                //espera o que aconteca
                //Entra de dado / método
                //Espera retornar
                throw new Error('Apenas um erro.');
            })
        })

        context.only('Caso 2', function(){
            it('deve acontecer alguma coisa', function(){
                //espera o que aconteca
                //Entra de dado / método
                //Espera retornar
                throw new Error('Apenas um erro.');
                
            })

            it('deve acontecer algum mimimi', function(){
                //espera o que aconteca
                //Entra de dado / método
                //Espera retornar
                throw new Error('Apenas um erro.');

            })
        })


    })

    describe('Método B', function(){
        
    })
})