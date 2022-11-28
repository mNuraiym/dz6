const click = document.querySelector("#click");
const click2 = document.querySelector("#click2");


let current = 0;

let quotes = {
    "- Уолт Дисней": '" Трудности преодолены."',
        "- Уинстон Чарчил": '" Я люблю Javascript"',
        "- Уил Рогерс": '" Учите Javascript"',
        "- Ник Вуйчич": '"Столкнувшись с трудностями, нельзя сдаваться, бежать. вы должны оценивать ситуацию, искать решения и верить в то, что все делается к лучшему. терпение – вот ключ к победе"',
        "- Амелия Эрхарт": '"Сложнее всего начать действовать, все остальное зависит только от упорства."',
        "- Майк Тайсон": '"Когда тебе тяжело, всегда напоминай себе о том, что если ты сдашься, лучше не станет."',
        "- Марк Твен": '"Танцуй так, как будто на тебя никто не смотрит;Пой, как будто тебя никто не слышит;Люби так, как будто тебя никогда не предавали, и живи так, как будто земля — это рай."',
        "- Джордж Бернард": '"Уметь выносить одиночество и получать от него удовольствие — великий дар"',
        "- Конфуций": '"Красота есть во всем, но не всем дано это видеть."',
        "- Майкл Фелпс": '"Цели никогда не должны быть простыми. Они должны быть неудобными, чтобы заставить вас работать"',
        "- Джеки Джойнер-Керси": '"Возраст — это всего лишь ограничение, которое вы кладёте себе в голову"',
        "- Леброн Джеймс": '"Не бойтесь неудач, потому что это ваш путь к успеху"',
        "- Коко Шанель": '"Старость не может защитить от любви, но любовь легко защитит от старости."',
        "- Федор Достоевский": '"Надо любить жизнь больше, чем смысл жизни."',
        "- Стив Джобс": '"Ваше время ограничено, не тратьте его, живя чужой жизнью"',

};


const generate = () => {
    let authors = Object.keys(quotes);
    authors = authors[current];
    let quote = quotes[authors];

    document.querySelector("#quote").textContent = quote;
    document.querySelector("#author").textContent = authors;

}
const generateRandom=()=>{
    current = Math.floor(Math.random()*14)

    let authors = Object.keys(quotes);
    authors = authors[current];
    console.log(authors)
    let quote = quotes[authors];

    document.querySelector("#quote").textContent = quote;
    document.querySelector("#author").textContent = authors;
}

document.querySelector('#generate').addEventListener('click',generateRandom)
click.addEventListener("click", ()=> {
    current++;
    if (current <= 15){
        generate();
    }else{
        current=0
        generate()
    }
});
click2.addEventListener("click", () => {
    current--;
    if (current > 0){
        generate();
    }else{
        current=14
        generate()
    }

})





