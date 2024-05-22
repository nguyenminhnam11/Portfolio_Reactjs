import vatvo from '../../images/vatvoshop.png'
import clock from '../../images/clock.png'
import todo from '../../images/todolist.png'

const projects = [  
    {
        name: "Vật Vờ Shop",
        image: vatvo,
        description: "The website selling VatVo brand shirts only includes front-end work, relatively complete with functions such as adding to cart, customizing quantity, product size, and total invoice...",
        tech: ["React", "Redux", "Json-Server", "Css", "Axios"],
        url: "https://vat-vo-shop.vercel.app/",
        git: "https://github.com/nguyenminhnam11/VatVoShop"
    },
    {
        name: "Todo App",
        image: todo,
        description: "Web-based application, is an application used to take notes and manage tasks to be done every day, with full functions of adding, deleting, editing tasks and storing on local storage.",
        tech: ["React", "CSS", "Local Storage"],
        url: "https://todo-list-mu-weld.vercel.app/",
        git: "https://github.com/nguyenminhnam11/Todo-List"
    },
    {
        name: "Clock App (Developing)",
        image: clock,
        description: "Is a clock application that includes features such as timer, alarm, stopwatch, countdown. In addition, the interface is inspired by the iPhone 15 Pro Max, with the ability to view battery percentage and charging status based on the computer's battery.",
        tech: ["React", "CSS", "React-use", "Responsive"],
        url: "https://clock-app-nine-sigma.vercel.app/",
        git: "https://github.com/nguyenminhnam11/Clock-App"
    },
]

export default projects