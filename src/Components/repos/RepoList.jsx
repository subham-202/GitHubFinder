import PropTypes from 'prop-types'
import RepoItem from './RepoItem'
function RepoList({repos}) {
  return (
    <div className='rounded-lg shadow-lg card bg-base-100'>
      <div className='card-body'>
        <h2 className='text-3xl my-4 font-bold card-title'>
          Latest Repositories
        </h2>
        {console.log(repos)}
        {repos.map((repo) => (
            <RepoItem key={repo.id} repo={repo}/>
        //   <h3>{repo.name}</h3>
            // {console.log(repo.name)}
        ))}
      </div>
    </div>
  )
}
RepoList.prototype={
    repos:PropTypes.array.isRequired,
}

export default RepoList
