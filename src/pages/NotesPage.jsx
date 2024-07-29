import NoteCard from '../components/NoteCard'
import { useContext } from 'react'
import { NoteContext } from '../context/NoteContext'

const NotesPage = () => {
  const {notes} = useContext(NoteContext)

  return (
    <div>
      {notes.map((note) => (
        <NoteCard note={note} key={note.$id} />
      ))}
    </div>
  )
}

export default NotesPage