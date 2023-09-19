let input = ""

function add(a)
{
    input = input + a
    document.getElementById("hasil").value = input
}

function hitung()
{
    out = eval(input)
    document.getElementById("hasil").value = out
    input = out
}

function c()
{
    input = ""
    document.getElementById("hasil").value = ''
}