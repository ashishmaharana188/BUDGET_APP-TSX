//function AppTsx() {
    /** var user = {
        userName: 'Ashish Maharana',
        userAge: 24,
        userLocation: 'Bhubaneswar'
      };
      var userName = 'Ashish Maharana'
      var userAge = 24
      var userLocation = 'Bhubaneswar'
    return (
      <div>
        <h1>NAME: {user.userName.toUpperCase()}</h1>
        <p>AGE: {user.userAge}</p>
        <p>LOCATION: {user.userLocation.toUpperCase()}</p>
      </div>
    ) */
    
    /*  const square = (x) => {
        return x * x;
      };
      console.log(square(9));
    
      const user = {
        name: 'andrew',
        cities: ['bbsr','berhampur'],
        lived() {
          const cityMessages = this.cities.map((city) => {
            return this.name + ' has lived in ' + city;
          });
          return cityMessages;
        }
      };
      console.log(user.lived());
   */
  
      /*
      let [count, SetCount] = useState(0);x
  const someButtonID = 'myidhere'
  const countHandler = (action) => {
    if (action === 'Increment'){
      SetCount(count + 1);
    } else if (action === 'Decrement'){
      SetCount(count - 1);
    } else if (action === 'Reset') {
        SetCount(count = 0);
      }
    };
    console.log('Button Clicked', count);
    return (
      <div>
        <h1>Count: {count}</h1>
        <button id={someButtonID} className='buttonClass' onClick={() => countHandler('Increment')}>+1</button>
        <button id={someButtonID} className='buttonClass' onClick={() => countHandler('Decrement')}>-1</button>
        <button id={someButtonID} className='buttonClass' onClick={() => countHandler('Reset')}>Reset</button>
      </div>  
  );
  */
  //class Person {
  //  name: string
  //  age:number
  //  constructor(name:string = 'Anonymous', age: number = 0) {
  //    this.name = name;
  //    this.age = age;
  //  }
  //  getDescription() {
  //    return `Hi. I am ${this.name}`;
  //  }
  //};
  //const me = new Person('Ashish Rana', 24);
  //console.log(me.getDescription());



  
///*
//  interface appTitle {
//    title: string,
//    subtitle: string,
//    options: string[];
//  }

//  /**option insert code */
//  const onFormSubmit = (e: FormEvent<HTMLFormElement>) => {
//    e.preventDefault();

//    const option = ((e.target as HTMLFormElement).elements.namedItem('option') as HTMLInputElement).value;
    
//    if(option) {
//      setAppTitle((appTitle) => ({
//        ...appTitle, options: [...appTitle.options,option]
//      }));
//      ((e.target as HTMLFormElement).elements.namedItem('option')as HTMLInputElement).value = '';
//    }
//  };
///**storage and usestare section */


//  const [appTitle, setAppTitle] = useState<appTitle>({
//    title: 'Indecision App',
//    subtitle: 'Put Your items here',
//    options: []
//  });

///** use effect section */
//  useEffect(() => {
//    console.log(appTitle.options);
//  }, [appTitle.options]);

///** remove button section*/
//  const removeButton = () => {
//    setAppTitle((appTitle) => ({
//      ...appTitle, options: []
//    }));
//  };


///**choose */
//const chooseButton = () => {
//  const randomNumber = Math.floor(Math.random() * appTitle.options.length);
//  const option = appTitle.options[randomNumber];
//  alert(option);
//};








////temp section

//class Person {
//  name: string
//  age:number
//  constructor(name:string = 'Anonymous', age: number = 0) {
//    this.name = name;
//    this.age = age;
//  }
//  getDescription() {
//    return `Hi. I am ${this.name}`;
//  }
//};

//class Student extends Person {
//  major: string
//  constructor(name: string, age: number, major: string) {
//    super(name, age);
//    this.major = major;
//  }
//  hasmajor() {
//    return !!this.major;
//  }
//  getDescription() {
//      let description = super.getDescription();

//      if (this.hasmajor()) {
//        description += `. My major is ${this.major}`
//      }

//      return description;
//  }
//}

//class Traveller extends Person {
//  homelocation: string
//  constructor(name: string, age: number, homelocation: string) {
//    super(name, age)
//    this.homelocation = homelocation;
//  }
//  hasLocation(){
//    return !!this.homelocation;
//  }
//  getDescription() {
//      let location = super.getDescription();

//    if (this.hasLocation()){
//      location += `. My location is ${this.homelocation}`;
//    }    
//    return location;
//  }
//}

//const me = new Student('Ashish Rana', 24, 'Computer Science');
//console.log(me.getDescription());

//const me1 = new Traveller('Ashish Rana', 24, 'Bhubaneswar');
//console.log(me1.getDescription());


//// temp section end





//    /**html section */
//return (
//    <div>
//      <h1>{appTitle.title}</h1>
//      {appTitle.subtitle && <p>{appTitle.subtitle}</p>}
//      <p>{appTitle.options.length > 0 ? 'Here Are Your Options' : 'No Options'}</p>
//      <p>{appTitle.options.length}</p>
//      <ol>{
//      appTitle.options.map((option, index) => (
//        <li key={index}>{option}</li>
//      ))}
//      </ol>
//      <button disabled={appTitle.options.length === 0} onClick={chooseButton}>Choose</button>
//      <button onClick={removeButton}>Remove All</button>
//      <form onSubmit={onFormSubmit}>
//        <input type="text" name="option" />
//        <button> Add Option</button>
//      </form>
//    </div>
//  );

//};

//////* Propes section */

//interface indecisionProps {
//  options: string[];
//  error: string | undefined;
//}

//interface defaultProps {
//  options?: string[];
//}

//interface headerProps {
//  title?: string;
//  subtitle?: string;
//  defaultProps?: string;
//}
//interface optionsProps {
//  options: string[];
//  handleRemoveOptions: () => void;
//  handleDeleteOption: (option: string) => void;
//}
//interface optionProps {
//  optionText: string;
//  handleDeleteOption: (option: string) => void;
//}
//interface actionProps {
//  handlePick: () => void;
//  hasOptions: boolean;
//}
//interface addOptionsProps {
//  handleAddOptions: (option: string) => string | undefined;
//  error: string | undefined;
//  clearError: () => void;
//}

////**Grouping section */

//class Indecision extends React.Component<defaultProps, indecisionProps> {
//  static defaultProps = {
//    options: [],
//  };

//  constructor(props: {}) {
//    super(props);
//    this.handleAddOptions = this.handleAddOptions.bind(this);
//    this.handleRemoveOptions = this.handleRemoveOptions.bind(this);
//    this.handlePick = this.handlePick.bind(this);
//    this.clearError = this.clearError.bind(this);
//    this.handleDeleteOption = this.handleDeleteOption.bind(this);
//    this.state = {
//      options: this.props.options!,
//      error: undefined,
//    };
//  }

//  componentDidMount() {
//    try {
//      const json = localStorage.getItem("options");
//      if (json) {
//        const options: string[] = JSON.parse(json);
//        this.setState(() => ({ options }));
//      }
//    } catch (e) {
//      // Do Nothing
//    }
//  }

//  componentDidUpdate(prevProps: indecisionProps, prevState: indecisionProps) {
//    if (prevState.options.length !== this.state.options.length) {
//      const json = JSON.stringify(this.state.options);
//      localStorage.setItem("options", json);
//    }
//  }

//  clearError() {
//    this.setState(() => ({ error: undefined }));
//  }

//  handleAddOptions(option: string): string | undefined {
//    if (!option) {
//      console.log("Empty option provided, setting error");
//      this.setState(() => ({ error: "Enter valid value" }));
//      return "Enter valid value";
//    } else if (this.state.options.indexOf(option) > -1) {
//      console.log("Duplicate option found, setting error");
//      this.setState(() => ({ error: "This value is already present" }));
//      return "This value is present";
//    }
//    console.log("Adding valid option, clearing error");
//    this.setState((prevState) => ({
//      options: prevState.options.concat([option]),
//      error: undefined,
//    }));
//  }
//  handleRemoveOptions() {
//    console.log("Removing all options and clearing error");
//    this.setState(() => ({
//      options: [],
//      error: undefined,
//    }));
//  }

//  handleDeleteOption(optionToRemove: string) {
//    this.setState((prevState) => ({
//      options: prevState.options.filter((option) => {
//        return optionToRemove !== option;
//      }),
//    }));
//  }

//  handlePick() {
//    const randomNumber = Math.floor(
//      Math.random() * this.state.options.length
//    );
//    const option = this.state.options[randomNumber];
//    alert(option);
//    this.clearError();
//  }
//  render() {
//    const title = "";
//    const subtitle = "";
//    return (
//      <div>
//        <Header title={title} subtitle={subtitle} />
//        <Action
//          hasOptions={this.state.options.length > 0}
//          handlePick={this.handlePick}
//        />
//        <Options
//          options={this.state.options}
//          handleRemoveOptions={this.handleRemoveOptions}
//          handleDeleteOption={this.handleDeleteOption}
//        />
//        <AddOptions
//          handleAddOptions={this.handleAddOptions}
//          error={this.state.error}
//          clearError={this.clearError}
//        />
//      </div>
//    );
//  }
//}

////**Header */

//const Header = (props: headerProps) => {
//  return (
//    <div>
//      <h1>{props.title === "" ? "Indecision" : props.title}</h1>
//      <h2>{props.subtitle === "" ? "Automated Decision" : props.title}</h2>
//    </div>
//  );
//};

//class Header extends React.Component<headerProps> {
//  render() {
//    return (
//      <div>
//        <h1>{this.props.title}</h1>
//        <h2>{this.props.subtitle}</h2>
//      </div>
//    );
//  }
//}

////*Action */

//const Action = (props: actionProps) => {
//  return (
//    <div>
//      <button onClick={props.handlePick} disabled={!props.hasOptions}>
//        What Should I do?
//      </button>
//    </div>
//  );
//};

//class Action extends React.Component<ActionProps> {
//  render() {
//    return (
//      <div>
//        <button
//          onClick={this.props.handlePick}
//          disabled={!this.props.hasOptions}
//        >
//          What Should I do?
//        </button>
//      </div>
//    );
//  }
//}

//*Option */

//const Options = (props: optionsProps) => {
//  return (
//    <div>
//      <button onClick={props.handleRemoveOptions}>Remove All</button>
//      {props.options.length === 0 && (
//        <p>Please add options to get started!</p>
//      )}
//      {props.options.map((option, index) => (
//        <Option
//          key={index}
//          optionText={option}
//          handleDeleteOption={props.handleDeleteOption}
//        />
//      ))}
//    </div>
//  );
//};

//class Options extends React.Component<optionsProps> {
//  render() {z
//    return (
//      <div>
//        <button onClick={this.props.handleRemoveOptions}>Remove</button>
//        {this.props.options.map((option, index) => (
//          <Option key={index} optionText={option} />
//        ))}
//      </div>
//    );
//  }
//}

//const Option = (props: optionProps) => {
//  return (
//    <div>
//      {props.optionText}
//      <button
//        onClick={(_e) => {
//          props.handleDeleteOption(props.optionText);
//        }}
//      >
//        Remove
//      </button>
//    </div>
//  );
//};

//class Option extends React.Component<optionProps> {
//  render() {

//  }
//}

//class AddOptions extends React.Component<addOptionsProps> {
//  constructor(props: addOptionsProps) {
//    super(props);
//    this.handleAddOption = this.handleAddOption.bind(this);
//  }
//  handleAddOption(e: React.FormEvent<HTMLFormElement>) {
//    e.preventDefault();

//    const option = (
//      e.currentTarget.elements.namedItem("option") as HTMLInputElement
//    ).value.trim();
//    const error = this.props.handleAddOptions(option);
//    this.setState(() => ({ error }));
//    if (!error) {
//      (
//        e.currentTarget.elements.namedItem("option") as HTMLInputElement
//      ).value = "";
//      this.props.clearError();
//    }
//  }
//  render() {
//    return (
//      <div>
//        {this.props.error && <p>{this.props.error}</p>}
//        <form onSubmit={this.handleAddOption}>
//          <input type="text" name="option" />
//          <button>Add Option</button>
//        </form>
//      </div>
//    );
//  }
//}

//return <Indecision />;

//** Temp Section */

//interface Appstate {
//  visibility: boolean;
//}

//class VisibilityToggle extends React.Component<{}, Appstate> {
//  constructor(props: any) {
//    super(props);
//    this.handleToggle = this.handleToggle.bind(this);
//    this.state = {
//      visibility: false,
//    };
//  }

//  handleToggle() {
//    this.setState((prevState) => {
//      return {
//        visibility: !prevState.visibility,
//      };
//    });
//  }
//  render() {
//    return (
//      <div>
//        <h1>Visibility Toggle</h1>
//        <button onClick={this.handleToggle}>
//          {this.state.visibility ? "Hide details" : "Show details"}
//        </button>
//        {this.state.visibility && (
//          <div>
//            <p>Hey. These are some details you can now see!</p>
//          </div>
//        )}
//      </div>
//    );
//  }
//}
//return <VisibilityToggle />;

//** Temp Section End */

//export default AppTsx
