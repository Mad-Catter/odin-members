database requirements {
    users {
        user_id,
        email,
        first_name,
        last_name,
        password,
        member (bool),
        admin (bool)
    },
    messages {
        message_id,
        title,
        content,
        user (foreign key),
        timestamp
    }
}

pages {
    view messages home page {
        either needs to be infinite or multiple pages.
        Each message needs to be able to be shown with either a user name and date or message given to the user telling them to sign up.
        Each message also needs a delete button for admins
    }
    login {
        a simple form for logging in,
        should be shown only if the user is not logged in,
        link to account creation
        
    }
    An account creation page/ {
        form needs password reconfirmation
    }
    An account membership page {
        a checkmark for becoming an admin. (Should be force checked if already member)
        An input form for becoming a member/admin.
        Should display a message that the user is already an admin if given admin status.
    }
    A create message form {
        only shown if a user is logged in,
        a form takes a title and a message of (undecided length).
    }
    404 page
}
routes {
    message router{
     view home,
     view message creation (protected and hidden),
     submit message creation
    }
    logInRouter {
        view login,
        submit login,
        
        submit logout (header),
    }
    accountRouter {
        view account creation,
        submit create account,
        view membership (semi-protected),
        submit membership ,
    }
    

    
}