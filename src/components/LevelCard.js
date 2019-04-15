import React from "react"
import { Card, Icon, Image } from "semantic-ui-react"
import { BLOCKCOLORS } from "../concerns/Config"

class LevelCard extends React.Component {
  generateCSS = (gameBoard = [[]], pixelSize = 10) => {
    let generatedBoxShadow = ""
    let firstPixel = BLOCKCOLORS[gameBoard[0][0]]
    gameBoard.forEach((row, ri) =>
      row.forEach((block, ci) => {
        generatedBoxShadow += `${ci * pixelSize}px ${ri * pixelSize}px 0 0 ${
          BLOCKCOLORS[block]
        }, `
      })
    )
    generatedBoxShadow = generatedBoxShadow.slice(0, -2)
    let css = {
      backgroundColor: firstPixel,
      boxShadow: generatedBoxShadow,
      height: `${pixelSize}px`,
      width: `${pixelSize}px`,
      position: "relative"
    }

    return (
      <div
        className={"levelPreview"}
        style={{
          height: `${gameBoard.length * 5}px`,
          width: `${gameBoard[0].length * 5}px`,
          borderColor: "rgb(206, 206, 206)"
        }}
      >
        <div style={css} />
      </div>
    )
  }

  render() {
    let board = JSON.parse(this.props.level_data)
    let preview = this.generateCSS(board, 5)

    let userMeta = this.props.user ? (
      <>
        <span style={{ float: "left" }}>
          <Icon name="user outline" />
          {`${this.props.user.user_name} `}
        </span>
        <span style={{ float: "right" }}>
          {this.props.completed && !this.props.userPublished ? (
            <>
              <Image
                className={"statusImage"}
                width={"20px"}
                src="https://i.ibb.co/THvVFLG/green.png"
              />
            </>
          ) : null}
          {!this.props.completed && !this.props.userPublished ? (
            <>
              <Image
                className={"statusImage"}
                width={"20px"}
                src="https://i.ibb.co/0scrPMV/red.png"
              />
            </>
          ) : null}
          {this.props.userPublished ? (
            <>
              {" "}
              {new Date(this.props.created_at).toLocaleDateString("en-GB")}{" "}
              <Icon name="arrow alternate circle up outline" />
            </>
          ) : null}
        </span>
      </>
    ) : (
      "by HUEman"
    )

    let extraStyle =
      this.props.completed || this.props.userPublished
        ? { textAlign: "center" }
        : { textAlign: "center" }

    // let extraStyle =
    //   this.props.completed || this.props.userPublished
    //     ? { backgroundColor: "rgb(229, 255, 224)", textAlign: "center" }
    //     : { backgroundColor: "rgb(252, 207, 207)", textAlign: "center" }

    return (
      <Card
        color={
          this.props.completed || this.props.userPublished ? "green" : "red"
        }
        onClick={() => this.props.handleLevelClick(this.props.id)}
        style={{
          width: "270px",
          height: "200px",
          backgroundColor: "rgb(255, 255, 255)",
          margin: "25px"
        }}
      >
        <Card.Content style={{ padding: "16px" }}>
          <Card.Header style={{ float: "left", padding: "5px" }}>
            {preview}
            {this.props.name}
          </Card.Header>
        </Card.Content>
        <Card.Content
          style={
            this.props.completed || this.props.userPublished
              ? { backgroundColor: "rgb(229, 255, 224)" }
              : { backgroundColor: "rgb(252, 207, 207)" }
          }
          extra
        >
          {userMeta}
        </Card.Content>
        <Card.Content extra style={extraStyle}>
          <span style={{ float: "left" }}>
            <Icon name="play circle outline" /> {this.props.plays}
          </span>
          <span style={{ textAlign: "center" }}>
            <Icon name="trophy" /> {this.props.completes}
          </span>
          <span style={{ float: "right" }}>
            <Icon name="thumbs up outline" />
            {this.props.upvotes
              ? (this.props.upvotes /
                  (this.props.downvotes + this.props.upvotes)) *
                100
              : 0}{" "}
          </span>
        </Card.Content>
      </Card>
    )
  }
}

export default LevelCard
