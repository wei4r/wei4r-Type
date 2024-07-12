import { useEffect} from 'react';
import "../css/globals.css";
import styles from "../css/page.module.css";
import Header from './Header';
import TimeBar from './TimeBar';
import WordContainer from './WordContainer';
import Result from './Result';
import Restart from './Restart';
import { initializeGame } from '../logic';


import { useLogic } from '../hooks/useLogic';
export default function Game() {
	const{countdown, time, setTime, restart, wordObjs, setWordObjs, cursorRef, gameRef, scoreboard} = useLogic();

	useEffect(() => {
    initializeGame(setWordObjs, gameRef);
  }, []);

	return (
	  <div>
			<Header/>
			<TimeBar time={countdown} setTime={setTime} restart={restart}/>
			{countdown > 0 ? 
				<WordContainer wordObjs={wordObjs} cursorRef={cursorRef} gameRef={gameRef}/> 
				: <Result scoreboard={scoreboard} time={time}/>
			}
			<Restart restart={restart}/>
    </div>
  );
}