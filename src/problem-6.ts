{
    //

    interface Profile {
        name: string;
        age: number;
        email: string;
    }
    
    function updateProfile(profile:Profile, updates:Partial<Profile>){
        return {
           ... profile,
            ...updates
        }
    }

    //
}