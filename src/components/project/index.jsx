import PropTypes from 'prop-types';
import { Fragment } from 'react';
import { AiOutlineFork, AiOutlineStar } from 'react-icons/ai';
import { MdInsertLink } from 'react-icons/md';
import { ga, languageColor, skeleton } from '../../helpers/utils';

const Project = ({ repo, loading, github, googleAnalytics }) => {
  if (!loading && Array.isArray(repo) && repo.length === 0) {
    return <></>;
  }

  const renderSkeleton = () => {
    let array = [];
    for (let index = 0; index < github.limit; index++) {
      array.push(
        <div className="card shadow-lg compact bg-base-100" key={index}>
          <div className="flex justify-between flex-col p-8 h-full w-full">
            <div>
              <div className="flex items-center">
                <span>
                  <h5 className="card-title text-lg">
                    {skeleton({
                      width: 'w-32',
                      height: 'h-8',
                      className: 'mb-1',
                    })}
                  </h5>
                </span>
              </div>
              <div className="mb-5 mt-1">
                {skeleton({
                  width: 'w-full',
                  height: 'h-4',
                  className: 'mb-2',
                })}
                {skeleton({ width: 'w-full', height: 'h-4' })}
              </div>
            </div>
            <div className="flex justify-between">
              <div className="flex flex-grow">
                <span className="mr-3 flex items-center">
                  {skeleton({ width: 'w-12', height: 'h-4' })}
                </span>
                <span className="flex items-center">
                  {skeleton({ width: 'w-12', height: 'h-4' })}
                </span>
              </div>
              <div>
                <span className="flex items-center">
                  {skeleton({ width: 'w-12', height: 'h-4' })}
                </span>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return array;
  };


  const projects=[
    {
      name:'Ecommer-React-Laravel',
      href:'https://github.com/hussainna/ecommer-laravel-react',
      description:'Modren Ecommer using React for front end and Laravel for back end with mysql database',
      language:'JS',
      star:'4',
      share:''
    },
    {
      name:'ecommer-vue-laravel',
      href:'https://github.com/hussainna/ecommer-vue-laravel',
      description:'Ecommer website with vue front end and laravel back end ',
      language:'PHP',
      star:'3',
      share:''
    },
    {
      name:'Real-Estate-Full-Stack',
      href:'https://github.com/hussainna/Real-Estate-Full-Stack',
      description:'Real Estate website offer for you buy houses and rent create by react and laravel',
      language:'PHP',
      star:'1',
      share:''
    },
    {
      name:'Blog-React-Laravel',
      href:'https://github.com/hussainna/Blog-React-Laravel',
      description:'Blog website can user post his own posts and read the users posts',
      language:'JS',
      star:'5',
      share:''
    },
    {
      name:'Pizza-React-Laravel',
      href:'https://github.com/hussainna/Pizza-React-Laravel',
      description:'The website is designed using React and Sass with laravel backend',
      language:'JS',
      star:'2',
      share:''
    },
    {
      name:'Watches-Laravel-Ecommer',
      href:'https://github.com/hussainna/Waches-Laravel-Website',
      description:'users can see the new watchers and can buy it. Created by laravel and Mysql',
      language:'PHP',
      star:'3',
      share:''
    },
    {
      name:'MovieAPI-React',
      href:'https://github.com/hussainna/MovieAPI-React',
      description:'This website show to users the movies that come from api with modren design',
      language:'JS',
      star:'7',
      share:''
    },
    {
      name:'Travil-Laravel',
      href:'',
      description:'',
      language:'',
      star:'',
      share:''
    },
    {
      name:'Travil-Laravel',
      href:'https://github.com/hussainna/Travail-Laravel',
      description:'The user can see all people who travel to city he want and maybe can contact with them if he want to send or get something from the city',
      language:'JS',
      star:'8',
      share:''
    },

  ]


  const renderProjects = () => {
    return projects.map((item, index) => (
      <a
        className="card shadow-lg compact bg-base-100 cursor-pointer"
        href={item.href}
        key={index}
        onClick={(e) => {
          e.preventDefault();

          try {
            if (googleAnalytics?.id) {
              ga.event({
                action: 'Click project',
                params: {
                  project: item.name,
                },
              });
            }
          } catch (error) {
            console.error(error);
          }

          window?.open(item.href, '_blank');
        }}
      >
        <div className="flex justify-between flex-col p-8 h-full w-full">
          <div>
            <div className="flex items-center">
              <div className="card-title text-lg tracking-wide flex text-base-content opacity-60">
                <MdInsertLink className="my-auto" />
                <span>{item.name}</span>
              </div>
            </div>
            <p className="mb-5 mt-1 text-base-content text-opacity-60 text-sm">
              {item.description}
            </p>
          </div>
          <div className="flex justify-between text-sm text-base-content text-opacity-60 truncate">
            <div className="flex flex-grow">
              <span className="mr-3 flex items-center">
                <AiOutlineStar className="mr-0.5" />
                <span>{item.stargazers_count}</span>
              </span>
              <span className="flex items-center">
                <AiOutlineFork className="mr-0.5" />
                <span>{item.forks_count}</span>
              </span>
            </div>
            <div>
              <span className="flex items-center">
                <div
                  className="w-3 h-3 rounded-full mr-1 opacity-60"
                  style={{ backgroundColor: languageColor(item.language) }}
                />
                <span>{item.language}</span>
              </span>
            </div>
          </div>
        </div>
      </a>
    ));
  };

  return (
    <Fragment>
      <div className="col-span-1 lg:col-span-2">
        <div className="grid grid-cols-2 gap-6">
          <div className="col-span-2">
            <div className="card compact bg-base-100 shadow bg-opacity-40">
              <div className="card-body">
                <div className="mx-3 flex items-center justify-between mb-2">
                  <h5 className="card-title">
                    {loading ? (
                      skeleton({ width: 'w-40', height: 'h-8' })
                    ) : (
                      <span className="text-base-content opacity-70">
                        GitHub Projects
                      </span>
                    )}
                  </h5>
                  {loading ? (
                    skeleton({ width: 'w-10', height: 'h-5' })
                  ) : (
                    <a
                      href={`https://github.com/hussainna`}
                      target="_blank"
                      rel="noreferrer"
                      className="text-base-content opacity-50 hover:underline"
                    >
                      See All
                    </a>
                  )}
                </div>
                <div className="col-span-2">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {loading || !repo ? renderSkeleton() : renderProjects()}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

Project.propTypes = {
  repo: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  github: PropTypes.object.isRequired,
  googleAnalytics: PropTypes.object.isRequired,
};

export default Project;
