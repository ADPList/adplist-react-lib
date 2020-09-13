import React from "react";
import styled from "styled-components";
import FadeIn from "react-fade-in";

/**
 * styles
 */
const StyledProjectMd = styled.div`
  cursor: pointer;

  .image {
    height: 236px;
    background-size: cover;
    background-position: center;
    background-image: url(${({ image }) => image});
  }

  .progress {
    width: 100%;
    height: 10px;
    border-radius: 0px;
    background-color: var(--grey-3);

    &__indicator {
      background-color: var(--teal);
      width: ${({ progress }) => `${progress}%`};
    }
  }

  .content {
    line-height: 1.6;

    &__progress {
      font-size: 14px;
      color: var(--teal);
      margin-bottom: 12px;
    }

    &__tag {
      opacity: 0.7;
      font-size: 12px;
      margin-bottom: 8px;
    }

    &__header {
      font-size: 20px;
      font-weight: 600;
      margin-bottom: 14px;
    }

    &__project-lead {
      font-weight: 600;
      font-size: 12px;
      line-height: 1;

      span {
        color: var(--teal);
      }
    }
  }
`;

const StyledProjectLg = styled.div`
  z-index: 1;
  color: #fff;
  cursor: pointer;
  padding: 72px 32px;
  position: relative;
  background-size: cover;
  background-position: center;

  &::before {
    top: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    content: " ";
    height: 100%;
    position: absolute;
    background: linear-gradient(
        0deg,
        rgba(10, 36, 63, 0.7),
        rgba(10, 36, 63, 0.7)
      ),
      url(${({ image }) => image}), #0a243f;
    background-size: cover;
    background-position: center;
    background-blend-mode: multiply, normal, normal;
  }

  .content {
    z-index: 1;
    line-height: 1.6;
    max-width: 384px;

    &__tag {
      font-size: 10px;
      margin-bottom: 14px;
    }

    &__header {
      font-size: 20px;
      margin-bottom: 14px;
    }

    &__caption {
      font-size: 12px;
      margin-bottom: 14px;
    }

    &__project-lead {
      margin-bottom: 24px;
      font-weight: 600;
      font-size: 12px;
      line-height: 1;

      span {
        color: var(--teal);
      }
    }
  }

  @media (min-width: 768px) {
    padding: 72px 96px;
  }
`;

const Project = ({
  progress = 0,
  size = "md",
  caption,
  header,
  image,
  lead,
  tag,
  ...props
}) => {
  if (size === "md") {
    return (
      <StyledProjectMd {...{ progress, image, ...props }}>
        <FadeIn>
          <div className="mb-20">
            <div className="image" />
            <div className="progress">
              <div className="progress__indicator" />
            </div>
          </div>

          <div className="content">
            {progress && (
              <p className="content__progress">
                {progress}% project completion
              </p>
            )}
            {tag && <p className="content__tag">{tag}</p>}
            {header && <p className="content__header">{header}</p>}
            {lead && (
              <p className="content__project-lead">
                Project led by <span>{lead}</span>
              </p>
            )}
          </div>
        </FadeIn>
      </StyledProjectMd>
    );
  }

  if (size === "lg") {
    return (
      <StyledProjectLg {...{ ...props, image }}>
        <div className="content">
          <FadeIn>
            {tag && <p className="content__tag">{tag}</p>}
            {header && <p className="content__header">{header}</p>}
            {caption && <p className="content__caption">{caption}</p>}
            {lead && (
              <p className="content__project-lead">
                Project led by <span>{lead}</span>
              </p>
            )}
            <span className="font-weight-600 font-size-12 line-height-10">
              view project
            </span>
          </FadeIn>
        </div>
      </StyledProjectLg>
    );
  }
};

export default Project;