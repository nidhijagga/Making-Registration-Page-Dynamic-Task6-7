
// const posts = [
//     { title: 'Post One', body: 'This is post one.' },
//     { title: 'Post Two', body: 'This is post two.' }
// ]


// function getPosts() {
//     setTimeout(() => {
//         let output = '';
//         posts.forEach((post) => {
//             output += `<li> ${post.title} </li>`
//         });
//         document.body.innerHTML = output;
//     }, 1000)
// }

// //This will take two seconds but the function of getpost will take 1 second.

// function createPost(post) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             posts.push(post);
//             const error = false;
//             if (!error) {
//                 resolve();
//             }
//             else {
//                 reject("Error");
//             }
//         }, 3000)
//     })
// }
// // setTimeout(() =>
// //    let liElements = document.getElementsByTagName('li')
// //     console.log(liElements);
// //     Array.from(liElements).forEach(function(element) {
// //     console.log(element);
// // }) , 3000)

// // function delPost() {
// //     setTimeout(() => {
// //         let liElements = document.getElementsByTagName('li')
// //         // console.log(liElements);
// //         let liArray = Array.from(liElements);
// //         while (liArray.length != 0) {
// //             setInterval(() => {
// //                 console.log(liArray.pop());
// //             }, 1000)
// //         }
// //     }, 5000)
// // }

// // function delPost() {
// //     setTimeout(() => {
// //         let liElements = document.getElementsByTagName('li');
// //         let liArray = Array.from(liElements);
// //         for (let i = 0; i < liArray.length; i++) {
// //             setTimeout(() => {
// //                 console.log(liArray[liArray.length - 1 - i]);
// //                 liArray[liArray.length - 1 - i].remove();
// //             }, (i + 1) * 1000);
// //         }
// //     }, 5000);
// // }

// // function delPost() {
// //     setTimeout(() => {
// //         let liElements = document.getElementsByTagName('li');
// //         let liArray = Array.from(liElements);
// //         let i = liArray.length - 1;
// //         let interval = setInterval(() => {
// //             if (i < 0) {
// //                 clearInterval(interval);
// //                 return;
// //             }
// //             console.log(liArray[i]);
// //             liArray[i].remove();
// //             i--;
// //         }, 1000);
// //     }, 5000);
// // }

// function delPost() {
//     setTimeout(() => {
//         let liElements = document.getElementsByTagName('li');
//         let liArray = Array.from(liElements);
//         let interval = setInterval(() => {
//             if (liArray.length === 0) {
//                 clearInterval(interval);
//                 return;
//             }
//             let li = liArray.pop();
//             console.log(li);
//             li.remove();
//         }, 1000);
//     }, 5000);
// }


// getPosts();



// createPost({ title: 'Post Three', body: 'This is post three' }).then(getPosts).catch(err => console.log(err)).then(delPost)

// // console.log(li);

// // Promise.all

// const promise1 = Promise.resolve('Hello World');
// const promise2 = 10;
// const promise3 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 2000, "GoodBye");
// })

// Promise.all([promise1, promise2, promise3]).then((values) => console.log(values));


const posts = [
    { title: 'post one', body: 'post is one' },
    {
        title: 'post two', body: 'post is two'
    }
]

function getpost() {


    setTimeout(() => {
        let output = '';
        for (let index = 0; index < posts.length; index++) {
            output += `<li>${posts[index].title}</li>`

        }
        document.body.innerHTML = output;

    }, 1000);

}

function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post)
            const error = false;
            if (!error) {
                resolve()
            } else {
                reject('Error:something went wrong')
            }
        }, 1000);
    })
}

function deletepost() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (posts.length > 0) {

                resolve(posts.pop())
            } else {
                reject(' array is empty now')
            }

        }, 2000);
    })

}

createPost({ title: 'post three', body: 'this is post 3' })

createPost({ title: 'post four', body: 'this is post 4' })

    .then(() => {
        getpost()
        deletepost().then(() => {
            getpost()
            deletepost().then(() => {
                getpost();
                deletepost().then(() => {
                    getpost()
                    deletepost().then(() => {
                        getpost()
                        deletepost().then().catch(err => console.log(err))
                    })

                })
            })
        })
    })


const promise1 = Promise.resolve('hello world');
const promise2 = 10;
const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 2000, 'goodbye')
})

const updateLastUserActivityTime = function() {
    return Promise((resolve, reject) => {
        setTimeout(() => {



            resolve(new Date().getTime())


        }, 1000);

    })
}
Promise.all([promise1, promise2, promise3]).then(value => {
    console.log(value);
})

function userUpdateapost() {

    Promise.all[(createPost, updateLastUserActivityTime)].then((a, b) => {
        console.log(a)
    })

}

Promise.all([createPost({ title: 'post four', body: 'this is post four' }), updateLastUserActivityTime]).then(val => console.log(posts, new Date().getTime()))

deletepost()
    .then(val => console.log(posts))
    .catch(err => console.log('Array is empty now'))