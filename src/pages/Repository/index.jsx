import { useParams } from "react-router-dom";
import {
  BackButton,
  Container,
  FilterList,
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
  const [newState, setNewState] = useState([
    {
      state: "all",
      label: "all",
      active: true,
    },
    {
      state: "open",
      label: "open",
      active: false,
    },
    {
      state: "closed",
      label: "closed",
      active: false,
    },
  ]);
  const [filterIndex, setFilterIndex] = useState(0);

  useEffect(() => {
    async function load() {
      setLoading(true);
      const nomeRepo = params.repositorio;

      const [repositorioData, issueData] = await Promise.all([
        api.get(`/repos/${nomeRepo}`),
        api.get(`/repos/${nomeRepo}/issues`, {
          params: {
            state: newState[filterIndex].state,
            per_page: 5,
          },
        }),
      ]);
      setDetailRepo(repositorioData.data);
      setIssues(issueData.data);
      setLoading(false);
    }
    load();
  }, [params.repositorio, page, filterIndex, newState]);

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

  const handleIndex = (index) => {
    setFilterIndex(index);
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
      <FilterList active={filterIndex}>
        {newState.map((state, index) => {
          return (
            <button
              key={state.index}
              onClick={() => {
                handleIndex(index);
              }}
            >
              {state.label}
            </button>
          );
        })}
      </FilterList>

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
          disabled={page < 2}
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
