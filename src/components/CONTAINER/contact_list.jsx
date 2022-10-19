import React from 'react';
import { Contact } from '../../models/contact.class';
import ContactComponent from '../contact';




const ContactListComponent = () => {

    
    const defaultContact1 = new Contact('Example first', 'Example lastName', 'Example1@gmail.com', false);
    const defaultContact2 = new Contact('Example first1', 'Example lastName1', 'Example2@gmail.com', true);


    return (
        <div>
            <div>
                <h1>Your Contacts:</h1>
            </div>
            {/*TODO: Aplicar un FOR/Map para renderizar una lista */}
            <ContactComponent contact={defaultContact1}></ContactComponent>
            <ContactComponent contact={defaultContact2}></ContactComponent>
        </div>
    );
};



export default ContactListComponent;
