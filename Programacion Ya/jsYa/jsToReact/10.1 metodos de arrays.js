const posts = [{
    id: 1,
    title: 'Mi primer post',
    image: 'http://image.com/1',
    tags: ['javascript', 'webdevelopment'],
},{
    id: 2,
    title: 'Mi experiencia con react',
    image: 'http://image.com/3',
    tags: ['javascript', 'webdevelopment', 'react'],
},{
    id: 3,
    title: 'Por que deje angular',
    image: 'http://image.com/4',
    tags: ['javascript', 'webdevelopment', 'angular'],
}]

log = console.log;

//Metodo find que busca dentro de un array
log(posts.find(post => post.title == 'Por que deje angular'));

//El metodo some es como el find pero retorna un valor booleanos (hay algo con x valor, true si lo encuentra, false si no)
log(posts.some(post => post.id == 4));
log(posts.some(post => post.id == 2));

//El metodo include se convina con el metodo some:
//Hay alguna tags que contenga la palabra vue?
log(posts.some(post => post.tags.includes('vue')));
//Hay alguna tag que incluya react?
log(posts.some(post => post.tags.includes('react')));

//Ahora lo contrario a some, no comprueba si se cumple en todas 

//En todos los post incluye la etiqueta react??
log(posts.every(post => post.tags.includes('react')));

//En todos los post incluye la etiqueta javascript??
log(posts.every(post => post.tags.includes('javascript')));

//El metodo map es como un bucle for pero una forma mas declarativa
//Con for de forma mas iperativa Lo que quieres ir haciendo
//de forma declarativa es que quieres hacer

//en cada post me crea un array de title
log(posts.map(post => post.title));

//Filter
 //Nos devuelve unicamente los posts donde se hable de angular
log(posts.filter(post => post.tags.includes('angular')));

//El metodo reduce

log(posts.reduce((allTags, post)=> {
    return [...allTags, ...post.tags]
}, []));

//Para que no haya contenido repetidos en un array
//Se usa el metodo set
log(posts.reduce((allTags, post)=> {
    return Array.from(new Set([...allTags, ...post.tags]))
}, []));

//Tambien se puede hacer de otra forma 
log(posts.reduce((allTags, post)=> {
    return [...allTags, ...post.tags]
}, []).filter((post, index, self)=> index === self.indexOf(post)));
