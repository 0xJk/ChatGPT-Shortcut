import React, { useState, useCallback } from "react";
import { Card, Typography, Tag, Tooltip, Space, Badge, Row, Col } from "antd";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { LinkOutlined } from "@ant-design/icons";
import clsx from "clsx";
import Translate from "@docusaurus/Translate";
import copy from "copy-text-to-clipboard";
import styles from "./ShowcaseCard/styles.module.css";
import { updateCopyCount } from "@site/src/api";
import { Waline } from "@site/src/components/waline";

function PromptPage({ prompt }) {
  const { i18n } = useDocusaurusContext();
  const currentLanguage = i18n.currentLocale.split("-")[0];

  const title = currentLanguage === "en" ? prompt.en.title : prompt.zh.title;
  const [description, setDescription] = useState(
    currentLanguage === "zh" ? prompt.zh.prompt : prompt.en.prompt
  );

  // Switching between the native language and English
  function handleParagraphClick() {
    // If the current language is English, do nothing
    if (currentLanguage === "en") return;

    if (description === prompt.zh.prompt) {
      setDescription(prompt.zh.description);
    } else {
      setDescription(prompt.zh.prompt);
    }
  }

  const remark = currentLanguage === "en" ? prompt.en.remark : prompt.zh.remark;
  const weight = prompt.weight;
  const website = prompt.website;
  const tags = prompt.tags;

  // Handle copying the description text
  const [copied, setShowCopied] = useState(false);
  const handleCopyClick = useCallback(async () => {
    try {
      if (description) {
        copy(description);
      }
      await updateCopyCount(prompt.id);
      setShowCopied(true);
      setTimeout(() => setShowCopied(false), 2000);
    } catch (error) {
      console.error("Error updating copy count:", error);
    }
  }, [prompt.id, description]);

  const walineOptions = {
    serverURL: "https://waline.newzone.top",
    path: "/prompt/" + prompt.id,
    lang: "en", // 设置为英文
  };

  return (
    <Layout title={title} description={remark}>
      <Row justify="center" style={{ marginTop: "20px" }}>
        <Col xs={24} sm={22} md={20} lg={18} xl={16}>
          <li key={title} className="card shadow--md">
            <Card
              title={
                <span>
                  {title}{" "}
                  <Badge
                    count={"Weight: " + weight}
                    style={{ backgroundColor: "#52c41a" }}
                  />
                  <button
                    className={clsx(
                      "button button--secondary button--sm",
                      styles.showcaseCardSrcBtn
                    )}
                    type="button"
                    onClick={handleCopyClick}
                  >
                    {copied ? (
                      <Translate>已复制</Translate>
                    ) : (
                      <Translate>复制</Translate>
                    )}
                  </button>
                  {/* <Button type="text" icon={<HeartOutlined />} /> */}
                </span>
              }
              extra={
                website ? (
                  <a href={website}>
                    <LinkOutlined />
                  </a>
                ) : null
              }
            >
              <p className={styles.showcaseCardBody}>👉 {remark}</p>
              <Tooltip
                title={
                  <Translate id="tooltip.switchLang">
                    点击切换显示语言
                  </Translate>
                }
              >
                <p
                  onClick={handleParagraphClick}
                  className={styles.showcaseCardBody}
                  style={{ cursor: "pointer" }}
                >
                  {description}
                </p>
              </Tooltip>
              <Space wrap>
                {tags.map((tag) => (
                  <Link to={"/?tags=" + tag}>
                    <Tag color="blue" key={tag}>
                      {tag}
                    </Tag>
                  </Link>
                ))}
              </Space>
              <Typography.Paragraph
                style={{ color: "gray", fontSize: "0.9em", marginTop: "20px" }}
              >
                <Translate id="comments.info">
                  请在下方回复您对本提示词的意见、想法或分享。
                </Translate>
              </Typography.Paragraph>{" "}
              <Waline {...walineOptions} />
            </Card>
          </li>
        </Col>
      </Row>
    </Layout>
  );
}

export default PromptPage;
