let  xAxisData = [
    {
        "name": 'Jan',
        "Sale": 112_000
    },
    {
        "name": 'Feb',
        "Sale": 99_000
    },
    {
        "name": 'Mar',
        "Sale": 12_090
    },
    {
        "name": 'Apr',
        "Sale": 99_000
    },
    {
        "name": 'May',
        "Sale": 54_000
    },
    {
        "name": 'Jun',
        "Sale": 85_000
    },
    {
        "name": 'Jul',
        "Sale": 34_000
    },
    {
        "name": 'Agu',
        "Sale": 18_598
    },
    {
        "name": 'Sep',
        "Sale": 0
    },
    {
        "name": 'Oct',
        "Sale": 73_078
    },
    {
        "name": 'Nov',
        "Sale": 12_900
    },
    {
        "name": 'Dev',
        "Sale": 97_000
    },
]

let members =[
    {   id:1,
        name:"Farnaz Khanbabapour",
        title:"Frontend Developer",
        img:"image/Foto.jpg",
    },
    {   id:2,
        name:"Nazila Hashemi",
        title:"Hacker",
        img:"image/Foto_2.png",
    },
       {id:3,
        name:"Mehrnaz Amirian",
        title:"Backend Developer",
        img:"image/Foto_3.png",
       }
]
let transactions = [
    {
        id: 1,
        customer: 'Farnaz Khanbabapour',
        date: '12 Jun 2023',
        amount: 433,
        status: 'Approved',
        img: 'image/Foto.jpg'
    },
    {
        id: 2,
        customer: 'Nazila Hashemi',
        date: '23 Jul 2023',
        amount: 43,
        status: 'Declined',
        img: 'image/Foto_2.png'
    },
    {
        id: 3,
        customer: 'Mehrnaz Amirian',
        date: '28 May 2023',
        amount: 123,
        status: 'Pending',
        img: 'image/Foto_3.png'
    },
]
let userRows = [
    {
        id: 1,
        username: 'Qadir Yolme',
        avatar: 'image/Foto.jpg',
        status: 'active',
        transaction: '$129.52',
        email: 'amin@gmail.com'
    },
    {
        id: 2,
        username: 'Amin Saeedi',
        avatar: 'image/Foto.jpg',
        status: 'non-active',
        transaction: '$110',
        email: 'amin@gmail.com'
    },
    {
        id: 3,
        username: 'Sasan Moq',
        avatar: 'image/Foto.jpg',
        status: 'active',
        transaction: '$98',
        email: 'amin@gmail.com'
    },
    {
        id: 4,
        username: 'Zahra Agayi',
        avatar: 'image/Foto.jpg',
        status: 'active',
        transaction: '$0',
        email: 'amin@gmail.com'
    },
    {
        id: 5,
        username: 'Hamze mohammadi',
        avatar: 'image/Foto.jpg',
        status: 'active',
        transaction: '$55.98',
        email: 'amin@gmail.com'
    }
]
let products = [
    {
        id: 1,
        title: 'Asus',
        avatar: "image/asus.jpeg",
        price: "850$"
    },
    {
        id: 2,
        title: 'Acer',
        avatar: 'image/acer.jpg',
        price: "890$"
    },
    {
        id: 3,
        title: 'HP',
        avatar: 'image/hp.jpg',
        price: "1890$"
    },
    {
        id: 4,
        title: 'Dell',
        avatar: 'image/dell.jpg',
        price: "490$"
    },
]
let productsData = [
    {
        name: 'Jan',
        sales: 4000,
    },
    {
        name: 'Feb',
        sales: 3000,
    },
    {
        name: 'Mar',
        sales: 5000,
    },
]

export  {xAxisData, members, transactions, userRows, products, productsData}