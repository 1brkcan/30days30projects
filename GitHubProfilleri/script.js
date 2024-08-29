

const searchGitHub = async () => {

    const username = document.getElementById("searchİnput").value;

    const response = await fetch(`https://api.github.com/users/${username}`);

    const detailsContainer = document.querySelector(".details");

    const data = await response.json();

    if (response.ok) {
        detailsContainer.style.display = "flex";
        document.getElementById("result").innerHTML = `

            <div class="profile">
                <div class="profile-image">
                    <img src="${data.avatar_url}">
                </div>
                <div class="profile-details">
                    <h2 class="name">${data.name || data.login}</h2>
                    <a class="username" target="_blank" href="https://github.com/${data.login}">@${data.login}</a>
                    <p class="bio">@${data.bio || "Hesapta bio bilgisi yok"}</p>

                    <div class="stats">
                        <div>
                            <div class="stats-name">Public Repo Sayısı</div>
                            <div class="stats-value">${data.public_repos}</div>
                        </div>
                        <div>
                            <div class="stats-name">Takipçi Sayısı</div>
                            <div class="stats-value">${data.followers}</div>
                        </div>
                        <div>
                            <div class="stats-name">Takip Edilen Sayı</div>
                            <div class="stats-value">${data.following}</div>
                        </div>
                    </div>

                    <div class="media">
                        <p>
                            <span class="media-value">
                                ${data.email || "e-mail bilgisi yok"}
                            </span>                    
                        </p>
                        <p>
                            <span class="media-value">
                                ${data.twitter_username || "twitter bilgisi yok"}
                            </span>                    
                        </p>
                        <p>
                            <span class="media-value">
                                ${data.blog || "blog bilgisi yok"}
                            </span>                    
                        </p>
                        <p>
                            <span class="media-value">
                                ${data.company || "company bilgisi yok"}
                            </span>                    
                        </p>

                    </div>

                </div>
                
            </div>
        
        `;
    }else{
        alert(data.message);
    };

};












