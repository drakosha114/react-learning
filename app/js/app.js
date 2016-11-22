/**
 * Created by askrypai on 11/22/16.
 */

var contacts = [
    {
        "_id": "583480df31438068a6f7731c",
        "index": 0,
        "picture": "http://placehold.it/32x32",
        "age": 27,
        "eyeColor": "green",
        "name": "Sharpe Goodwin",
        "phone": "+1 (976) 431-2330"
    },
    {
        "_id": "583480df29a375bbba6a88e0",
        "index": 1,
        "picture": "http://placehold.it/32x32",
        "age": 32,
        "eyeColor": "green",
        "name": "Parrish Irwin",
        "phone": "+1 (965) 586-2710"
    },
    {
        "_id": "583480dfed71a30e2672b523",
        "index": 2,
        "picture": "http://placehold.it/32x32",
        "age": 32,
        "eyeColor": "green",
        "name": "Jeannette Erickson",
        "phone": "+1 (840) 407-3925"
    },
    {
        "_id": "583480dfc08e699bf6c9196d",
        "index": 3,
        "picture": "http://placehold.it/32x32",
        "age": 37,
        "eyeColor": "green",
        "name": "Earnestine Conway",
        "phone": "+1 (932) 538-3729"
    },
    {
        "_id": "583480dfff8d2be3cc718003",
        "index": 4,
        "picture": "http://placehold.it/32x32",
        "age": 34,
        "eyeColor": "brown",
        "name": "Holly Allison",
        "phone": "+1 (804) 503-3960"
    },
    {
        "_id": "583480df847464a4d18bcdd1",
        "index": 5,
        "picture": "http://placehold.it/32x32",
        "age": 32,
        "eyeColor": "blue",
        "name": "Antonia Melton",
        "phone": "+1 (926) 467-2725"
    },
    {
        "_id": "583480dfdbcab5779b1a1344",
        "index": 6,
        "picture": "http://placehold.it/32x32",
        "age": 25,
        "eyeColor": "green",
        "name": "Blackwell Atkinson",
        "phone": "+1 (901) 542-3067"
    },
    {
        "_id": "583480dfe44d38a3d21db993",
        "index": 7,
        "picture": "http://placehold.it/32x32",
        "age": 32,
        "eyeColor": "brown",
        "name": "Justice Smith",
        "phone": "+1 (859) 483-3232"
    },
    {
        "_id": "583480df81dab98e06cfd631",
        "index": 8,
        "picture": "http://placehold.it/32x32",
        "age": 25,
        "eyeColor": "green",
        "name": "Langley Bentley",
        "phone": "+1 (965) 574-3966"
    },
    {
        "_id": "583480df3e7e2c9cc40d459f",
        "index": 9,
        "picture": "http://placehold.it/32x32",
        "age": 36,
        "eyeColor": "blue",
        "name": "Norma Hayden",
        "phone": "+1 (937) 596-2300"
    },
    {
        "_id": "583480df6428b01ecdea5780",
        "index": 10,
        "picture": "http://placehold.it/32x32",
        "age": 33,
        "eyeColor": "green",
        "name": "Macias Martin",
        "phone": "+1 (843) 418-2759"
    },
    {
        "_id": "583480dfae54a2232367bc48",
        "index": 11,
        "picture": "http://placehold.it/32x32",
        "age": 40,
        "eyeColor": "green",
        "name": "Caitlin Mack",
        "phone": "+1 (976) 493-2727"
    },
    {
        "_id": "583480df52c05f4f1f619ec0",
        "index": 12,
        "picture": "http://placehold.it/32x32",
        "age": 20,
        "eyeColor": "brown",
        "name": "Wilder Bolton",
        "phone": "+1 (940) 581-3557"
    },
    {
        "_id": "583480dfcf67249b3757de8e",
        "index": 13,
        "picture": "http://placehold.it/32x32",
        "age": 36,
        "eyeColor": "green",
        "name": "Phyllis Cherry",
        "phone": "+1 (834) 543-2604"
    },
    {
        "_id": "583480df7f2f3b70f516b888",
        "index": 14,
        "picture": "http://placehold.it/32x32",
        "age": 28,
        "eyeColor": "green",
        "name": "Jacqueline Allen",
        "phone": "+1 (904) 526-3662"
    }
];

/*
var Hello = React.createClass({
    render: function () {
        return <li> Привет {this.props.name} {this.props.surname}</li>;
    }
});

ReactDOM.render(
    <ul>
        <Hello name="Петр" surname="Александрович"/>
        <Hello name="Андрей" surname="Александрович"/>
        <Hello name="Иван" surname="Александрович"/>
    </ul>,
    document.getElementById('content')
);
*/
var Contact = React.createClass({
    render: function () {
        return (
            <li className="contacts__item">
                <img src={this.props.picture} width="32" height="32"/>
                <h2 className="contacts__name">{this.props.name}</h2>
                <p className="contacts__phone">{this.props.phone}</p>
            </li>
        )
    }
});

var Contacts = React.createClass({
    getInitialState: function () {
        return {
            displayedContacts: contacts
        }
    },
    onChangeHandler: function(e) {
        var searchQuery = e.target.value.toLowerCase();
        var filtredContacts;
        if (searchQuery.length === 0) {

            filtredContacts = contacts;

        } else {

            filtredContacts = contacts.filter(function (el) {

                return el.name.toLowerCase().indexOf(searchQuery) !== -1;
            });

        }

        this.setState({
            displayedContacts: filtredContacts
        });
    },
    render: function () {
        return (
            <div className="contacts">
                <div className="contacts__inputwrapper">
                    <input type="text" className="contacts__input" onChange={this.onChangeHandler}/>
                </div>
                <ul className="contacts__list">
                    {
                        this.state.displayedContacts.map(function(el) {
                          return <Contact key={el.index} name={el.name} image={el.picture} phone={el.phone}/>
                        })
                    }
                </ul>
            </div>
        );

    }
});
ReactDOM.render(
   <Contacts/>,
    document.getElementById('content')
);