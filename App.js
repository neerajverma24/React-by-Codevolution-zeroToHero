import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import GreetClass from './components/GreetClass'
import WithJSX from './components/WithJSX';
import WithoutJSX from './components/WithoutJSX';
import WithoutJSXTwo from './components/WithoutJSXTwo';

import FunctionalProps from './components/FunctionProps';
import ClassProps from './components/ClassProps';

import StateInClassComp from './components/StateInClassComp'
import Counter from './components/Counter'

import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';

import EventBind from './components/EventBind';

import ParentComponent from './components/ParentComponent';
import ChildComponent from './components/ChildComponent';
import ParentLifting from './components/ParentLifting'
import ChildLifting from './components/ChildLifting';
import UserGreet from './components/UserGreet';
import UserGreet2 from './components/UserGreet2';
import UserGreet3 from './components/UserGreet3'
import UserGreet4 from './components/UserGreet4';
import NameList from './components/NameList'
import PersonList from './components/PersonList';
import IndexAsKey from './components/IndexAsKey';
import StyleSheet from './components/StyleSheet';
import InlineStyle from './components/InlineStyle';
import Form from './components/Form';

import MountingLifeCycleA from './LifeCycle Methods/MountingLifeCycleA';
import UpdatingLifeCycleA from './LifeCycle Methods/UpdatingLifeCycleA'
import FragmentDemo from './components/FragmentDemo';
import Table from './components/Table';
import ParentComp from './components/ParentComp';

import MemoParent from './components/MemoParent'
import RefsDemo from './components/RefsDemo';
import RefParentFocusInput from './components/RefParentFocusInput';
import ForwardRefParentInput from './components/ForwardRefParentInput'
import PortalDemo from './components/PortalDemo';

import ErrorHero from './LifeCycle Methods/ErrorHero';
import ErrorBoundary from './LifeCycle Methods/ErrorBoundary';

import ClickCounter from './Higher Order Components/ClickCounter';
import HoverCounter from './Higher Order Components/HoverCounter'
import WithClickCounter from './Higher Order Components/WithClickCounter';
import WithHoverCounter from './Higher Order Components/WithHoverCounter';

import ComponentC from './ContextAPI/ComponentC';
import { UserProvider } from './ContextAPI/userContext';
import GetHTTP from './React-HTTP/GetHTTP';
import PostHTTP from './React-HTTP/PostHTTP';
import PutHTTP from './React-HTTP/PutHTTP';

import CounterStateHook from './React-Hooks/useState/CounterStateHook';
import CounterStateHookTwo from './React-Hooks/useState/CounterStateHookTwo';
import CounterStateHookThree from './React-Hooks/useState/CounterStateHookThree';
import CounterStateHookFour from './React-Hooks/useState/CounterStateHookFour';

import ClassCounter from './React-Hooks/useEffect/ClassCounter';
import CounterEffectHookOne from './React-Hooks/useEffect/CounterEffectHookOne';
import ClassMouseEffect from './React-Hooks/useEffect/ClassMouseEffect';
import MouseEffectHook from './React-Hooks/useEffect/MouseEffectHook';
import MouseEffectContainer from './React-Hooks/useEffect/MouseEffectContainer';
import DeleteHTTP from './React-HTTP/DeleteHTTP';
import IntervalClassCounter from './React-Hooks/useEffect/IntervalClassCounter';
import IntervalEffectHookCounter from './React-Hooks/useEffect/IntervalEffectHookCounter';
import DataFetching from './React-Hooks/useEffect/DataFetching';
import DataFetching2 from './React-Hooks/useEffect/DataFetching2';
import DataFetching3 from './React-Hooks/useEffect/DataFetching3';

import MainComponent from './React-Hooks/useContext/MainComponent';

import Counter1 from './React-Hooks/useReducer/Counter1';
import Counter2 from './React-Hooks/useReducer/Counter2';
import Counter3 from './React-Hooks/useReducer/Counter3';
import DataFetching1 from './React-Hooks/useReducer/DataFetching1';
import DataFetchingReducer from './React-Hooks/useReducer/DataFetchingReducer'

import ParentCompoent from './React-Hooks/useReducer with useContext/ParentCompoent';

import ParentComponentCallBack from './React-Hooks/useCallback/ParentComponentCallback';

import CounterMemo from './React-Hooks/useMemo/CounterMemo';

import InputRef from './React-Hooks/useRef/InputRef';
import ClassTimer from './React-Hooks/useRef/ClassTimer';
import HookTimer from './React-Hooks/useRef/HookTimer';
import TimerWithUseRef from './React-Hooks/useRef/TimerWithUseRef';

import DocTitleOne from './useDocumentTitle CustomHook/DocTitleOne'
import DocTitleTwo from './useDocumentTitle CustomHook/DocTitleTwo';

import CounterTest1 from './useCounter CustomHook/CounterTest1';
import CounterTest2 from './useCounter CustomHook/CounterTest2';
import MainPage from './React Router DOM/Configuring Route/MainPage';


function App() {
  return (
    <div className="App">

      {/* Making components ==============================================*/}
      {/* <Greet /> */}
      {/* <GreetClass /> */}

      {/* JSX SYNTAX ====================================================== */}
      {/* <WithJSX /> */}
      {/* <WithoutJSX /> */}
      {/* <WithoutJSXTwo /> */}

      {/* PROPS ============================================================ */}
      {/* <FunctionalProps name="Neeraj" surname="Kumar">
        <p>He is a Web Developer</p>
      </FunctionalProps>
      <FunctionalProps name="Rahul" surname="Nagar">
        <button>Excel</button>
      </FunctionalProps>
      <FunctionalProps name="Deepak" surname="Verma">
        <p>He is a MERN STACK Developer</p>
      </FunctionalProps>  */}

      {/* <ClassProps name="Neeraj" surname="Kumar">
        <p>He is a Web Developer</p>
      </ClassProps>
      <ClassProps name="Rahul" surname="Nagar">
        <button>Excel</button>
      </ClassProps> */}


      {/* useState in Class Components  ==================================== */}
      {/* <StateInClassComp /> */}
      {/* <Counter /> */}

      {/* Event Handling  ===================================================== */}
      {/* <FunctionClick /> */}
      {/* <ClassClick /> */}


      {/* Binding Event Handlers  =============================================== */}
      {/* <EventBind /> */}


      {/* Methods as Props  ==================================================== */}
      {/* <ParentComponent /> */}
      {/* <ChildComponent /> */}


      {/* Lifting State Up  ==================================================== */}
      {/* DEFINITION : Lifting state up refers to the practice of moving the state from a child component to its parent component in order to share the state among multiple components */}

      {/* <ParentLifting /> */}
      {/* <ChildLifting /> */}


      {/* Conditional Rendering  ================================================= */}
      {/* <UserGreet />         ( if-else ) */}
      {/* <UserGreet2 />        ( Element Variables ) */}
      {/* <UserGreet3 />        ( Ternary Conditional Operator )*/}
      {/* <UserGreet4 />        ( Short Circuit Operator ) */}


      {/*  List Rendering   =====================================================  */}
      {/* <NameList /> */}
      {/* <PersonList /> */}

      {/* Index as Key Anti-Pattern ================================================== */}
      {/* <IndexAsKey /> */}


      {/* Styling and CSS Components ============================================== */}
      {/* <StyleSheet secondary={false} /> */}
      {/* <InlineStyle /> */}


      {/* Basics of Form Handling ===================================================== */}
      {/* <Form /> */}


      {/* Creating a different " LIFECYCLE METHOD FOLDER " TO UNDERSTAND LIFE CYCLE METHOD  ===========================================================================*/}
      {/* <MountingLifeCycleA /> */}
      {/* <UpdatingLifeCycleA /> */}


      {/* Fragment In React ====================================================== */}
      {/* <FragmentDemo /> */}
      {/* <Table /> */}


      {/* Pure Components (in Class)  ====================================================== */}
      {/* Creating three components to check the pure components.. */}
      {/* <ParentComp /> */}

      {/* memo (in Parent i.e. Class   &  Child i.e. Function)   ================================================================================= */}
      {/* <MemoParent /> */}


      {/* Refs  =========================================================================== */}
      {/* <RefsDemo /> */}


      {/* Refs with Class Component =================================================== */}
      {/* <RefParentFocusInput /> */}

      {/* Forwarding Ref =================================================== */}
      {/* <ForwardRefParentInput /> */}

      {/* Portal ==================================================== */}
      {/* first create an id in index.html */}
      {/* <PortalDemo /> */}


      {/* Error Boundaries (using folder LifeCycle Methods)============================================= */}

      {/* <ErrorBoundary>
        <ErrorHero heroName={'Batman'} />
        <ErrorHero heroName={'Superman'} />
        <ErrorHero heroName={'Joker'} />
      </ErrorBoundary> */}

      {/* <ErrorBoundary>
        <ErrorHero heroName={'Batman'} />
      </ErrorBoundary>

      <ErrorBoundary>
        <ErrorHero heroName={'Superman'} />
      </ErrorBoundary>

      <ErrorBoundary>
        <ErrorHero heroName={'Joker'} />
      </ErrorBoundary > */}


      {/* Higher Order Components Part 1=================================================== */}
      {/* Creating a folder called Higher Order Components */}

      {/* <ClickCounter /> */}
      {/* <HoverCounter />  */}

      {/* Higher Order Components Part 2 =================================================== */}
      {/* <WithClickCounter /> */}
      {/* <WithHoverCounter /> */}

      {/* Context API =================================================================== */}
      {/* <UserProvider value="Neeraj">
        <ComponentC />
      </UserProvider> */}

      {/* HTTP Library : (Axios)         Creating folder React-HTTP =========================================================================== */}
      {/* we have to install axios first , use cmd :  npm install axios */}
      {/* <GetHTTP /> */}
      {/* <PostHTTP /> */}
      {/* <PutHTTP /> */}
      {/* <DeleteHTTP /> */}


      {/*  HOOKS      (  Creating a folder    " React-Hooks   )                         ================================================================================================================================================================================ */}
      
      {/* useState Hook ==================================================== */}
      {/* <CounterStateHook /> */}
      {/* <CounterStateHookTwo /> */}
      {/* <CounterStateHookThree /> */}
      {/* <CounterStateHookFour /> */}


      {/* useEffect Hook ========================================================== */}
      {/* <ClassCounter /> */}
      {/* <CounterEffectHookOne /> */}
      {/* <ClassMouseEffect /> */}
      {/* <MouseEffectHook /> */}
      {/* <MouseEffectContainer /> */}
      {/* <IntervalClassCounter /> */}
      {/* <IntervalEffectHookCounter /> */}
      {/* <DataFetching /> */}
      {/* <DataFetching2 /> */}
      {/* <DataFetching3 /> */}

      {/* useContext Hook =============================================================*/}
      {/* <MainComponent /> */}


      {/* useReducer Hook   ========================================================== */}
      {/* <Counter1 /> */}
      {/* <Counter2 /> */}
      {/* <Counter3 /> */}
      {/* <DataFetching1 /> */}
      {/* <DataFetchingReducer /> */}


      {/* useReducer with useContext ================================================= */}
      {/* <ParentCompoent /> */}

      {/* useCallback hook ====================================================== */}
      {/* <ParentComponentCallBack /> */}


      {/* useMemo Hook ============================================================== */}
      {/* <CounterMemo /> */}


      {/* useRef Hook  ============================================================*/}
      {/* <InputRef /> */}
      {/* <ClassTimer /> */}
      {/* <HookTimer />   without useRef */}
      {/* <TimerWithUseRef /> */}



      {/* Custom Hook 1  Folder ======================================================== */}
      {/* <DocTitleOne /> */}
      {/* <DocTitleTwo /> */}

      {/* Custom Hook 2 Folder ========================================================== */}
      {/* <CounterTest1 /> */}
      {/* <CounterTest2 /> */}



      {/* React Router DOM ================================================== */}
      {/* <MainPage />  */}
    </div >
  );
}

export default App;
