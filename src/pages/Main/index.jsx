import { useCallback, useEffect, useState } from "react";
import { MainContainer, SubmitButton, Form, List, DeleteButton } from "./style";
import { FaBars, FaGithub, FaPlus, FaSpinner, FaTrash } from "react-icons/fa";
import api from "../../services/api";

const Main = () => {
  const [newRepo, setNewRepo] = useState("");
  const [repositorios, setRepositorios] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const repoStorage = localStorage.getItem("repos");
    if (repoStorage) {
      setRepositorios(JSON.parse(repoStorage));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("repos", JSON.stringify(repositorios));
  }, [repositorios]);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();

      async function submit() {
        setLoading(true);
        try {
          if (newRepo === "") {
            throw new Error("You need to indicate a repository");
          }
          const response = await api.get(`repos/${newRepo}`);

          const hasRepo = repositorios.find((repo) => repo.name === newRepo);

          if (hasRepo) {
            throw new Error("Repositorio duplicado");
          }
          const data = {
            name: response.data.full_name,
          };
          setRepositorios([...repositorios, data]);
          setNewRepo("");
        } catch (err) {
          console.log(err);
        } finally {
          setLoading(false);
        }
      }
      submit();
    },
    [newRepo, repositorios]
  );

  const handleDelete = useCallback(
    (repo) => {
      const find = repositorios.filter((reposi) => reposi.name !== repo);
      setRepositorios(find);
    },
    [repositorios]
  );

  return (
    <MainContainer>
      <h1>
        <FaGithub />
        My repository
      </h1>
      <Form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add repository"
          value={newRepo}
          onChange={(e) => setNewRepo(e.target.value)}
        />
        <SubmitButton loading={loading ? 1 : 0}>
          {loading ? (
            <FaSpinner color="#fff" size={14} />
          ) : (
            <FaPlus color="#fff" size={14} />
          )}
        </SubmitButton>
      </Form>
      <List>
        {repositorios.map((repo, index) => (
          <li key={index}>
            <span>
              <DeleteButton
                onClick={() => {
                  handleDelete(repo.name);
                }}
              >
                <FaTrash size={14} />
              </DeleteButton>
              {repo.name}
            </span>
            <a href="">
              <FaBars size={20} />
            </a>
          </li>
        ))}
      </List>
    </MainContainer>
  );
};

export default Main;
