

class GitHub{
  constructor(){
    this.client_id="df20e8aa78bea283656c";
    this.client_secret="edcce78011c13eb2e1fedfaa89b063e09d60ccec";
  }

  async getUser(user){
   const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

   const profile = await profileResponse.json();

   return {
       
    profile

   }
  }
}