import { useParams } from "react-router-dom";
import {
  BackButton,
  Container,
  IssuesList,
  Owner,
  PageActions,
} from "./styles";
import { useEffect, useState } from "react";
import api from "../../services/api";
import { FaArrowLeft } from "react-icons/fa";

const Repository = () => {
  const params = useParams();
  const [detailRepo, setDetailRepo] = useState({});
  const [issues, setIssues] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function load() {
      setLoading(true);
      const nomeRepo = params.repositorio;

      const [repositorioData, issueData] = await Promise.all([
        api.get(`/repos/${nomeRepo}`),
        api.get(`/repos/${nomeRepo}/issues`, {
          params: {
            state: "open",
            per_page: 5,
          },
        }),
      ]);
      setDetailRepo(repositorioData.data);
      setIssues(issueData.data);
      setLoading(false);
    }
    load();
  }, [params.repositorio]);

  useEffect(() => {
    async function loadIssues() {
      const repoName = params.repositorio;
      const response = await api.get(`/repos/${repoName}/issues`, {
        params: {
          state: "open",
          page: page,
          per_page: 5,
        },
      });
      setIssues(response.data);
    }
    loadIssues();
  }, [page]);

  const handlePage = (action) => {
    setPage(action === "back" ? page - 1 : page + 1);
  };

  return (
    <Container>
      <BackButton to="/">
        <FaArrowLeft size={20} color="#000" />
      </BackButton>
      <Owner>
        <img src={detailRepo.owner?.avatar_url} alt={detailRepo.owner?.login} />
        <h1>{detailRepo.name}</h1>
        <p>{detailRepo.description}</p>
      </Owner>

      <IssuesList>
        {issues.map((issue) => (
          <li key={String(issue.id)}>
            <img src={issue.user.avatar_url} alt={issue.user.login} />
            <div>
              <strong>
                <a href={issue.html_url}>{issue.title}</a>
                {issue?.labels.map((label) => (
                  <span key={String(label.id)}>{label.name}</span>
                ))}
                <p>{issue.user.login}</p>
              </strong>
            </div>
          </li>
        ))}
      </IssuesList>
      <PageActions>
        <button
          type="button"
          onClick={() => {
            handlePage("back");
          }}
        >
          Back
        </button>
        <button
          type="button"
          onClick={() => {
            handlePage("next");
          }}
        >
          Next
        </button>
      </PageActions>
    </Container>
  );
};

export default Repository;
