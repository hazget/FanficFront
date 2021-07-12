import './single.css';
import Sidebar from '../../components/sidebar/Sidebar';
import SinglePost from '../../components/singlePost/SinglePost';

export default function Single({theme}) {
    return (
        <div className={"single"+theme}>
            <SinglePost theme={theme}/>
            <Sidebar theme={theme}/>
        </div>
    );
}

