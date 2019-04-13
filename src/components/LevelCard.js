import React from "react"
import { Card } from "semantic-ui-react"
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
          width: `${gameBoard[0].length * 5}px`
        }}
      >
        <div style={css} />
      </div>
    )
  }

  render() {
    let board = JSON.parse(this.props.level_data)
    let preview = this.generateCSS(board, 5)

    let userMeta = this.props.user
      ? `by ${this.props.user.user_name}`
      : "by HUEman"

    let extraStyle = this.props.completed
      ? { backgroundColor: "rgb(229, 255, 224)", textAlign: "right" }
      : { backgroundColor: "rgb(252, 207, 207)", textAlign: "right" }

    return (
      <Card
        color={this.props.completed ? "green" : "red"}
        onClick={() => this.props.handleLevelClick(this.props.id)}
        style={{ width: "380px" }}
      >
        <Card.Content style={{ padding: "16px" }}>
          <Card.Header style={{ float: "left" }}>
            {preview}
            {this.props.name} <Card.Meta>{userMeta}</Card.Meta>{" "}
          </Card.Header>
        </Card.Content>
        <Card.Content extra style={extraStyle}>
          🎲 {this.props.plays} | 🏆 {this.props.completes}{" "}
          {this.props.completed ? "| ✅" : "| ❌"}{" "}
          {this.props.userPublished ? "| 📖" : null}
        </Card.Content>
      </Card>
    )
  }
}

export default LevelCard
