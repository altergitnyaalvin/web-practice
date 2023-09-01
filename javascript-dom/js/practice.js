const tweets = [
    {
        author_id : 2244994945,
        username : "@programmerlog",
        created_at : "2020-02-14T19:00:55.000Z",
        id : 1228393702244134912,
        edit_history_tweet_ids : "1228393702244134912",
        text : "What did the developer write in their Valentine’s card?\n  \nwhile(true) {\n    I = Love(You);  \n}"
    },
    {
        author_id : 2244994945,
        username : "@txtdarimantan",
        created_at : "2020-02-14T19:00:55.000Z",
        id : 1228393702244134913,
        edit_history_tweet_ids : "1228393702244134912",
        text : "testt"
    },
    {
        author_id : 2244994945,
        username : "@txtdariyunif",
        created_at : "2020-02-14T19:00:55.000Z",
        id : 1228393702244134914,
        edit_history_tweet_ids : "1228393702244134912",
        text : "misi boloo"
    }
]

const tweets_new = [
    {
        author_id : 2244994945,
        username : "@programmerlog",
        created_at : "2020-02-14T19:00:55.000Z",
        id : 1228393702244134912,
        edit_history_tweet_ids : "1228393702244134912",
        text : "Hello world!"
    },
    {
        author_id : 2244994945,
        username : "@txtdarimantan",
        created_at : "2020-02-14T19:00:55.000Z",
        id : 1228393702244134913,
        edit_history_tweet_ids : "1228393702244134912",
        text : "cekkk"
    },
    {
        author_id : 2244994945,
        username : "@txtdariyunif",
        created_at : "2020-02-14T19:00:55.000Z",
        id : 1228393702244134914,
        edit_history_tweet_ids : "1228393702244134912",
        text : "test test"
    }
]

const new_tweet = {
    author_id : 2244994945,
    username : "@txtdariyunif",
    created_at : "2020-02-14T19:00:55.000Z",
    id : 1228393702244134914,
    edit_history_tweet_ids : "1228393702244134912",
    text : "test test"
}

function joinTweets(arr1, arr2){
    const arr3 = arr1.concat(arr2)

    return arr3
}

function addTweet(arr1, new_obj) {
    const arr3 = [...arr1]
    arr3.push(new_obj)
    return arr3
}
console.log(tweets)

// console.log(addTweet(tweets, new_tweet))

// 2. Bikin callback function untuk return hasil looping
const callbackItem = (item, index) => {
    return item.username
}

function getUsername(){
    // 1. Bikin variable baru dan assign array dengan map method nya
    const username = tweets.map(callbackItem)
    
    // 3. Panggil variable mappingnya
    return username
}

function getText(){
    tweets.forEach((item, index) => {
        console.log(item.text)
    })
}

// console.log(getText())

// Step by step looping array with .map()
// 1. Bikin variable baru dan assign array dengan map method nya
// 2. Bikin callback function untuk return hasil looping
// 3. Panggil variable mappingnya

