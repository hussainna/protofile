import { MdLocationOn } from 'react-icons/md';
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillMediumSquare,
} from 'react-icons/ai';
import { SiTwitter } from 'react-icons/si';
import { CgDribbble } from 'react-icons/cg';
import { RiPhoneFill, RiMailFill } from 'react-icons/ri';
import { Fragment } from 'react';
import {
  FaBehanceSquare,
  FaBuilding,
  FaDev,
  FaFacebook,
  FaGlobe,
  FaSkype,
  FaMastodon,
  FaStackOverflow,
  FaTelegram,
  FaLinkedin,
  FaYoutube,
} from 'react-icons/fa';
import PropTypes from 'prop-types';
import { skeleton } from '../../helpers/utils';

const isCompanyMention = (company) => {
  return company.startsWith('@') && !company.includes(' ');
};

const companyLink = (company) => {
  return `https://github.com/${company.substring(1)}`;
};

const getFormattedMastodonValue = (mastodonValue, isLink) => {
  const [username, server] = mastodonValue.split('@');

  if (isLink) {
    return `https://${server}/@${username}`;
  } else {
    return `${username}@${server}`;
  }
};

const ListItem = ({ icon, title, value, link, skeleton = false }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="flex justify-start py-2 px-1 items-center"
    >
      <div className="flex-grow font-medium gap-2 flex items-center my-1">
        {icon} {title}
      </div>
      <div
        className={`${
          skeleton ? 'flex-grow' : ''
        } text-sm font-normal text-right mr-2 ml-3 ${link ? 'truncate' : ''}`}
        style={{
          wordBreak: 'break-word',
        }}
      >
        {value}
      </div>
    </a>
  );
};

const Details = ({ profile, loading, social, github }) => {
  const renderSkeleton = () => {
    let array = [];
    for (let index = 0; index < 4; index++) {
      array.push(
        <ListItem
          key={index}
          skeleton={true}
          icon={skeleton({ width: 'w-4', height: 'h-4' })}
          title={skeleton({ width: 'w-24', height: 'h-4' })}
          value={skeleton({ width: 'w-full', height: 'h-4' })}
        />
      );
    }

    return array;
  };

  return (
    <div className="card shadow-lg compact bg-base-100">
      <div className="card-body">
        <div className="text-base-content text-opacity-60">
          {loading || !profile ? (
            renderSkeleton()
          ) : (
            <Fragment>
              {profile.location && (
                <ListItem
                  icon={<MdLocationOn />}
                  title="Based in:"
                  value={'Iraq'}
                />
              )}
              {profile.company && (
                <ListItem
                  icon={<FaBuilding />}
                  title="Company:"
                  value={'Nuppir Company'}
                  link={
                    isCompanyMention(profile.company.trim())
                      ? companyLink('https://www.nippur.co/')
                      : null
                  }
                />
              )}
              <ListItem
                icon={<AiFillGithub />}
                title="GitHub:"
                value={'hussainna'}
                link={`https://github.com/hussainna`}
              />
              {/* {social?.twitter && (
                <ListItem
                  icon={<SiTwitter />}
                  title="Twitter:"
                  value={social.twitter}
                  link={`https://twitter.com/${social.twitter}`}
                />
              )} */}
              {/* {social?.mastodon && (
                <ListItem
                  icon={<FaMastodon />}
                  title="Mastodon:"
                  value={getFormattedMastodonValue(social.mastodon, false)}
                  link={getFormattedMastodonValue(social.mastodon, true)}
                />
              )} */}
              {social?.linkedin && (
                <ListItem
                  icon={<FaLinkedin />}
                  title="LinkedIn:"
                  value={'Hussain Alasdy'}
                  link={`https://www.linkedin.com/in/hussain-alasdy-477725235/`}
                />
              )}
              {social?.dribbble && (
                <ListItem
                  icon={<CgDribbble />}
                  title="Dribbble:"
                  value={social.dribbble}
                  link={`https://dribbble.com/${social.dribbble}`}
                />
              )}
              {social?.behance && (
                <ListItem
                  icon={<FaBehanceSquare />}
                  title="Behance:"
                  value={social.behance}
                  link={`https://www.behance.net/${social.behance}`}
                />
              )}
              {social?.facebook && (
                <ListItem
                  icon={<FaFacebook />}
                  title="Facebook:"
                  value={social.facebook}
                  link={`https://www.facebook.com/${social.facebook}`}
                />
              )}
                <ListItem
                  icon={<AiFillInstagram />}
                  title="Instagram:"
                  value={'Alasdy_08'}
                  link={`https://www.instagram.com/alasdy_08`}
                />
              {social?.youtube && (
                <ListItem
                  icon={<FaYoutube />}
                  title="YouTube:"
                  value={`@${social.youtube}`}
                  link={`https://www.youtube.com/@${social.youtube}`}
                />
              )}
              {/* {social?.medium && (
                <ListItem
                  icon={<AiFillMediumSquare />}
                  title="Medium:"
                  value={social.medium}
                  link={`https://medium.com/@${social.medium}`}
                />
              )}
              {social?.dev && (
                <ListItem
                  icon={<FaDev />}
                  title="Dev:"
                  value={social.dev}
                  link={`https://dev.to/${social.dev}`}
                />
              )} */}
              {social?.stackoverflow && (
                <ListItem
                  icon={<FaStackOverflow />}
                  title="Stack Overflow:"
                  value={social.stackoverflow.split('/').slice(-1)}
                  link={`https://stackoverflow.com/users/${social.stackoverflow}`}
                />
              )}
              {/* {social?.website && (
                <ListItem
                  icon={<FaGlobe />}
                  title="Website:"
                  value={social.website}
                  link={social.website}
                />
              )} */}
              {social?.skype && (
                <ListItem
                  icon={<FaSkype />}
                  title="Skype"
                  value={social.skype}
                  link={`skype:${social.skype}?chat`}
                />
              )}
                <ListItem
                  icon={<FaTelegram />}
                  title="Telegram"
                  value={'alasdy_08'}
                  link={`https://t.me/alasdy_08`}
                />

                <ListItem
                  icon={<RiPhoneFill />}
                  title="Phone:"
                  value={'07832571433'}
                  link={`tel:07832571433`}
                />
              {social?.email && (
                <ListItem
                  icon={<RiMailFill />}
                  title="Email:"
                  value={'hiseenabd5@gmail.com'}
                  link={`mailto:hiseenabd5@gmail.com`}
                />
              )}
            </Fragment>
          )}
        </div>
      </div>
    </div>
  );
};

Details.propTypes = {
  profile: PropTypes.object,
  loading: PropTypes.bool.isRequired,
  social: PropTypes.object.isRequired,
  github: PropTypes.object.isRequired,
};

ListItem.propTypes = {
  icon: PropTypes.node,
  title: PropTypes.node,
  value: PropTypes.node,
  link: PropTypes.string,
  skeleton: PropTypes.bool,
};

export default Details;
