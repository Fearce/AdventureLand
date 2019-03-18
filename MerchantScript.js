//party script
	partyup=true;

	var pwhitelist = ["FearceR","FearceW","FearceP","FearceM"];

	if (partyup)
	{
		parent.window.addEventListener('keydown', (event) => {
	   var keyName = event.key; 
		if(keyName == 'p' || keyName == 'P')
		{
			invite_party_list();
			request_party_list()
		}        
	}, false);

	setInterval(function()
	{
		invite_party_list();
		request_party_list()
		accept_party_list();
	},20000); 
	}

	//Adds all whitelisted party memebers to party
	function invite_party_list() {
	  for (members in pwhitelist) send_party_invite(pwhitelist[members],0);
	}

	//Accepts requests from whitelisted party memebers
	function accept_party_list() {
		for (members in pwhitelist) 
		{
			accept_party_request(pwhitelist[members]);
			accept_party_invite(pwhitelist[members]);
		}
	}
	function request_party_list() {
	  for (members in pwhitelist) send_party_request(pwhitelist[members],0)
		  }
	  for (members in pwhitelist) send_party_invite(pwhitelist[members],0)

	  for (members in pwhitelist) send_party_request(pwhitelist[members],0);
	  
	  