const setCookie = (cname, cvalue) => {
    document.cookie = `${cname}=${cvalue};path=/`
}

const getCookie = (cname) => {

    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    
    for(let i = 0; i < ca.length; i++) {
        
        let c = ca[i];
        
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }

        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }

    return "";
}

const _resetCookie = () => {setCookie('todoData', '')}

const addTodo = () => {

    let cookieData = getCookie('todoData')
    const input = prompt('Please enter your TODO:')

    if (!input || input.trim() === '') {
        return
    }

    if (cookieData === '') {
        setCookie('todoData', input)
    }

    else if (cookieData !== '') {
        cookieData += `,${input}`
        setCookie('todoData', cookieData)
    }

    updateTodo()

}

const updateTodo = () => {

    let todoData = getCookie('todoData').split(',')
    const todoContainer = document.getElementById('ft_list')

    if (todoData == '') {
        return
    }

    todoContainer.innerHTML = ''
    
    todoData.reverse().forEach(todo => {

        const todoItem = document.createElement('li')

        todoItem.innerText = todo
        todoItem.onclick = () => {

            const deleteConfirm = confirm(`Do you wish to delete "${todo}"?`)

            if (deleteConfirm) {
                todoData.splice(todoData.indexOf(todo), 1)
                todoItem.remove()
                setCookie('todoData', todoData.reverse().join(','))
            }

        }

        todoContainer.appendChild(todoItem)

    })

}

updateTodo()