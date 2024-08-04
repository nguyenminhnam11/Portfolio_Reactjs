import vatvo from '../../images/vatvoshop.png'
import todo from '../../images/todolist.png'
import shopeefood from '../../images/shopeefood.png'
import face from '../../images/faceai.jpg'
import crud from '../../images/clock.png'

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
        name: "ShopeeFood - Delivery App",
        image: shopeefood,
        description: "This is an online food delivery website, it has a complete front end and responsive for mobile",
        tech: ["React", "CSS", "React-router-dom", "Responsive"],
        url: "https://shopee-food-clone.vercel.app/",
        git: "https://github.com/nguyenminhnam11/ShopeeFood"
    },
    {
        name: "Face Touch App",
        image: face,
        description: "This is a simple app using AI library that can scan faces and alert when touching face.",
        tech: ["React", "CSS", "Mobilenet library", "Howler library"],
        url: "https://face-touch-app.vercel.app/",
        git: "https://github.com/nguyenminhnam11/Face-Touch-App"
    },
    {
        name: "CRUD - REST API",
        image: crud,
        description: "These are basic functions with reading, adding, editing, deleting data from API.",
        tech: ["React", "Bootstrap", "Axios", "MockApi"],
        url: "https://crud-basic-reactjs.vercel.app/",
        git: "https://github.com/nguyenminhnam11/CRUD_Basic_reactjs"
    }
    // {
    //     name: "Clock App (Developing)",
    //     image: clock,
    //     description: "Is a clock application that includes features. Also has the ability to view battery percentage and charge status based on the computer's battery.",
    //     tech: ["React", "CSS", "React-use", "Responsive"],
    //     url: "https://clock-app-nine-sigma.vercel.app/",
    //     git: "https://github.com/nguyenminhnam11/Clock-App"
    // }
    
]

export default projects