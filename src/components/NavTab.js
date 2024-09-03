import 'bootstrap/dist/css/bootstrap.min.css';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Text from './Text';


function NavTab(text) {


    return (
        <Tabs
            defaultActiveKey="home"
            id="uncontrolled-tab-example"
            className="mb-3 border-none mt-4 fs-5"
        >
            <Tab className='text-white' eventKey="home" title="Home">
                <Text style="text-secondary " text="User experience design - UI/UX"/>
                <Text style="text-secondary" text="Delight the user and make it work."/>
                <Text style="text-secondary mt-3" text="Web and user interface design - Development"/>
                <Text style="text-secondary" text="Websites, web experiences, ..."/>
                <Text style="text-secondary mt-3" text="Interaction design - Animation"/>
                <Text style="text-secondary" text="I like to move it move it."/>
            </Tab>
            <Tab eventKey="profile" title="Profile">
                <Text style="text-secondary" text="Awwwards.com - Winner" />
                <Text style="text-secondary" text="2019 - 2020" />
                <Text style="text-secondary mt-3" text="Awwwards.com - Winner" />
                <Text style="text-secondary" text="2019 - 2020" />
                <Text style="text-secondary mt-3" text="Awwwards.com - Winner" />
                <Text style="text-secondary" text="2019 - 2020" />
            </Tab>
            <Tab eventKey="experience" title="experience">
                <Text style="text-secondary" text="Awwwards.com - Winner" />
                <Text style="text-secondary" text="2019 - 2020" />
                <Text style="text-secondary mt-3" text="Awwwards.com - Winner" />
                <Text style="text-secondary" text="2019 - 2020" />
                <Text style="text-secondary mt-3" text="Awwwards.com - Winner" />
                <Text style="text-secondary" text="2019 - 2020" />
            </Tab>
            <Tab eventKey="education" title="education">
                <Text style="text-secondary" text="Awwwards.com - Winner" />
                <Text style="text-secondary" text="2019 - 2020" />
                <Text style="text-secondary mt-3" text="Awwwards.com - Winner" />
                <Text style="text-secondary" text="2019 - 2020" />
            </Tab>
        </Tabs>
    );
}

export default NavTab