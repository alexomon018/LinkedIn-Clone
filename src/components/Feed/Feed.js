import React, { useState, useEffect } from 'react'
import './Feed.css'
import CreateIcon from '@material-ui/icons/Create'
import InputOption from '../InputOption/InputOption'
import ImageIcon from '@material-ui/icons/Image'
import { CalendarViewDay, EventNote, Subscriptions } from '@material-ui/icons'
import Post from '../Post/Post'
import { db } from '../../firebase'
import firebase from 'firebase'
function Feed() {
  const [posts, setPosts] = useState([])
  const [input, setInput] = useState('')

  console.log(input)

  useEffect(() => {
    db.collection('posts')
      .orderBy('timestamp', 'desc')
      .onSnapshot((snapshot) =>
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      )
  }, [])

  const sendPost = (e) => {
    e.preventDefault()
    db.collection('posts').add({
      name: 'Aleksa Mitic',
      description: 'This is a test',
      message: input,
      photoUrl: '',
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    })
    setInput('')
  }

  return (
    <div className='feed'>
      <div className='feed__inputContainer'>
        <div className='feed__input'>
          <CreateIcon />
          <form>
            <input
              type='text'
              onChange={(e) => setInput(e.target.value)}
              value={input}
            />
            <button onClick={sendPost} type='submit'>
              Send
            </button>
          </form>
        </div>
        <div className='feed__inputOptions'>
          <InputOption Icon={ImageIcon} title='Photo' color='#70b5f9' />
          <InputOption Icon={Subscriptions} title='Video' color='#E7A33E' />
          <InputOption Icon={EventNote} title='Event' color='#C0CBCD' />
          <InputOption
            Icon={CalendarViewDay}
            title='Write article'
            color='#7FC15E'
          />
        </div>
      </div>
      {/* Posts */}
      {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
        <Post
          key={id}
          name={name}
          description={description}
          message={message}
          photoURL={photoUrl}
        />
      ))}{' '}
      <Post
        name='Aleksa Mitic'
        description='This is a test'
        input='Wow this works'
      />
    </div>
  )
}

export default Feed
