import PostCard from "./components/postcard";
import datas from "./components/posts.json";

function App() {
  return (
    <div >
      <div className="grid grid-cols-2 ">
        {datas?.map((data) => {
          return (
            <div key={data.id} style={{ margin: "auto" }}>
              <PostCard
                profileImage={data.profileImage}
                username={data.username}
                content={data.content}
                isLiked={data.isLiked}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
