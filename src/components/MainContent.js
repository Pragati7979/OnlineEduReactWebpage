import './MainContent.css'
import HomeAnime from "./../assets/home_anime.gif"
import Card from './Card'


const MainContent = () => {
    return <div className="container">
        <h1 className="welcome">Welcome Geeky Minds!</h1>
        <section>
        <div className='text-center'>
                <img src={HomeAnime} alt="animation" className='img-deet'/>
            </div>
        </section>
        
        <section>
        <h2 style={{"fontSize":"bold",marginLeft:"19px",marginBottom:"5px"}}>Watch our trending videos🔥</h2>
            <Card name="Playlist_name_demo" url="https://www.youtube.com/watch?v=tiLWCNFzThE&list=PLwGdqUZWnOp3aROg4wypcRhZqJG3ajZWJ"/>
            <Card name="Playlist_name_demo" url="https://www.youtube.com/watch?v=tiLWCNFzThE&list=PLwGdqUZWnOp3aROg4wypcRhZqJG3ajZWJ" />
            <Card name="Playlist_name_demo" url="https://www.youtube.com/watch?v=tiLWCNFzThE&list=PLwGdqUZWnOp3aROg4wypcRhZqJG3ajZWJ" />
            <Card name="Playlist_name_demo" url="https://www.youtube.com/watch?v=tiLWCNFzThE&list=PLwGdqUZWnOp3aROg4wypcRhZqJG3ajZWJ" />
            <Card name="Playlist_name_demo" url="https://www.youtube.com/watch?v=tiLWCNFzThE&list=PLwGdqUZWnOp3aROg4wypcRhZqJG3ajZWJ" />
            <Card name="Playlist_name_demo" url="https://www.youtube.com/watch?v=tiLWCNFzThE&list=PLwGdqUZWnOp3aROg4wypcRhZqJG3ajZWJ" />
            <Card name="Playlist_name_demo" url="https://www.youtube.com/watch?v=tiLWCNFzThE&list=PLwGdqUZWnOp3aROg4wypcRhZqJG3ajZWJ"/>
            <Card name="Playlist_name_demo" url="https://www.youtube.com/watch?v=tiLWCNFzThE&list=PLwGdqUZWnOp3aROg4wypcRhZqJG3ajZWJ"/>
       
        </section>
    </div>
}

export default MainContent