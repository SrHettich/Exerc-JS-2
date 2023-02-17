function verificar()
{
    var data = new Date()
    var ano = data.getFullYear()
    var nasc = document.getElementById('txtano')
    var res = document.getElementById('res')
    var img = document.getElementById('img')

    if(nasc.value == 0 || nasc.value > ano)
    {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }
    else
    {
        var sex = document.getElementsByName('sex')
        var idade = ano - Number(nasc.value)
        var genero = ''
        var img = document.createElement('img')
        
        if(sex[0].checked)
        {
            genero = 'Homem'
            if(idade >= 0 && idade < 12)
            {
            img.setAttribute('src', 'garoto.jpg')
            }

            else if(idade >= 12 && idade < 21)
            {
                img.setAttribute('src', 'jovem.h.jpg')
            }

            else if(idade >= 21 && idade < 60)
            {
                img.setAttribute('src', 'adulto.h.jpg')
            }

            else
            {
                img.setAttribute('src', 'idoso.h.jpg')
            }
        }
        else if(sex[1].checked)
        {
        genero = 'Mulher'

        if(idade >= 0 && idade < 12)
        {
            img.src = 'garota.jpg'
        }

        else if(idade >= 12 && idade < 21)
        {
            img.src = 'jovem.m.jpg'
        }

        else if(idade >= 21 && idade < 60)
        {
            img.src = 'adulta.jpg'
        }

        else
        {
            img.src = 'idosa.jpg'
        }
        }
         res.innerHTML = `${genero} de ${idade} anos`
    }
   
    res.appendChild(img)
    
    
}