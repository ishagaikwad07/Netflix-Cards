function Profile(){
    return(
        <div>
            <h1>Profile Card</h1>
            <ProfileCard
            name = "Alice"
            age = {30}
            greeting = {
                <div>
                    <strong>Hi Alice, have a wonderful Day!</strong>
                </div>
            }
            >
                <p>Hobbies: Reading,Hiking</p>
                <button>Contact</button>
            </ProfileCard>

            <ProfileCard

            name = "Bob"
            age = {25}
            greeting={
                <div> 
                    <strong>Hi Bob, have a wonderful day!</strong>
                </div>
            }
            
            >
                <p>Hobbies: Gaming ,Cooking</p>
                <button>Contact</button>

            </ProfileCard>
        </div>
    )
}

export default Profile;


function ProfileCard({name,age,greeting,children}){
    // const {name,age,greeting,children} = props;
    return(
        <div>
            <h2>Name:{name} </h2>
            <p>Age:{age}</p>
            <p>{greeting}</p>
            <div>{children}</div>
        </div>
    )
}