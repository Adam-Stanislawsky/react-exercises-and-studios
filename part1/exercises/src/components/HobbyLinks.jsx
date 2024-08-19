export default function HobbyLinks(){
    let hobbyLinks = ["https://www.blenkocollectors.com/", "https://www.home-barista.com/", ];

    return(
        <div>
            <a href = {hobbyLinks[0]}>Blenko Collectors</a>,
            <a href = {hobbyLinks[1]}>Home Barista</a>
        </div>
    );
};
