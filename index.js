function generateTable(table)
{
    const body = document.body, row = document.createElement('row');

    for(let i = 0;  i < row; i++)
    {
        
    }
    
body.appendChild(row);
    
}

function add()
{
    document.getElementById('table').innerHTML = generateTable();
}