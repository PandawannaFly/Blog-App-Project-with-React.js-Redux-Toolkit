import PostsList from "./feature/post/postsList";
import AddPostForm from "./feature/post/AddPostForm";
import SinglePostPage from "./feature/post/SinglePostPage";
import EditPostForm from "./feature/post/EditPostForm";
import UsersList from "./feature/users/UsersList";
import UserPage from './feature/users/UserPage';
import Layout from "./components/Layout";
import { Routes, Route, Navigate } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>

        <Route index element={<PostsList />} />

        <Route path="post">
          <Route index element={<AddPostForm />} />
          <Route path=":postId" element={<SinglePostPage />} />
          <Route path="edit/:postId" element={<EditPostForm />} />
        </Route>

        <Route path="user">
          <Route index element={<UsersList />} />
          <Route path=":userId" element={<UserPage />} />
        </Route>

        {/* Catch all - replace with 404 component if you want */}
        <Route path="*" element={<Navigate to="/" replace />} />

      </Route>
    </Routes>
  );
}

export default App;