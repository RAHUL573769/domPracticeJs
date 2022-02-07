console.log("Document Object Model");

a=document.getElementsByTagName('h3')
console.log(a);

const b=document.getElementsByTagName('p');
for( const blog of b){
    console.log(blog);
}

const c=document.getElementById('second-title');

console.log(c);
const d=document.getElementsByTagName('h3');

for( let h of d){
    console.log(h);
}